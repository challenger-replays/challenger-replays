import { redisClientInstance as cacheController } from '../../../services/redis';
import { Snippet } from '../../types';
import { channelIds, playlistsLatestItemsList, search, uploadsPlaylistsIdList } from '../youtube';

const KEY_FEED = 'challenger-replays/videos/feed';
const KEY_SEARCH = 'challenger-replays/videos/query';

const FEED_EXPIRE_TIME = parseInt(`${process.env.CACHE_FEED_EXPIRE_TIME}`, 10) || 5 * 60;
const SEARCH_RESULTS_EXPIRE_TIME = parseInt(`${process.env.CACHE_SEARCH_RESULTS_EXPIRE_TIME}`, 10) || 1 * 60;

export class DataSource {
  private cacheQueue: {
    [key: string]: Array<{
      resolve: (value: Snippet[] | PromiseLike<Snippet[]>) => void,
      reject: (reason: any) => void,
    }>;
  };

  constructor() {
    this.cacheQueue = {
      feed: [],
    };
  }

  public async getFeed(): Promise<Snippet[]> {
    try {
      const cache = await cacheController.get<Snippet[]>(KEY_FEED); // replace with list
      if (cache) {
        return cache;
      }
     } catch (e) {
      console.error(e);
    }

    const queue = this.cacheQueue.feed;
    const promise = new Promise<Snippet[]>((resolve, reject) => queue.push({resolve, reject}));

    if (1 === queue.length) {
      try {
        const ids = await uploadsPlaylistsIdList(channelIds);
        const latestVideos = await playlistsLatestItemsList(ids);

        try {
          await cacheController.setex(KEY_FEED, FEED_EXPIRE_TIME, latestVideos);
        } catch (e) {
          console.error(e);
        }

        queue.forEach(({ resolve }) => resolve(latestVideos));
      } catch (e) {
        queue.forEach(({ reject }) => reject(e));
      } finally {
        queue.splice(0); // remove all watchers
      }
    }

    return promise;
  }

  public async getSearchResult(query: string, offset = 0, resultsPerPage = 10): Promise<Snippet[]> {
    const key = `${KEY_SEARCH}:${query}`;
    const end = offset + resultsPerPage;

    try {
      const cache = await cacheController.lrange<Snippet>(key, offset, end);
      if (cache && 0 < cache.length) {
        return cache;
      }
    } catch (e) {
      console.error(e);
    }

    const queue = this.cacheQueue[key] || [];
    const promise = new Promise<Snippet[]>((resolve, reject) => queue.push({resolve, reject}));

    if (1 === queue.length) {
      try {
        const searchResult: Snippet[] = await search(channelIds, query);

        try {
          await cacheController.rpush(key, searchResult);
          await cacheController.expire(key, SEARCH_RESULTS_EXPIRE_TIME);
        } catch (e) {
          console.error(e);
        }

        queue.forEach(({ resolve }) => resolve(searchResult.slice(offset, end)));
      } catch (e) {
        queue.forEach(({ reject }) => reject(e));
      } finally {
        queue.splice(0); // remove all watchers
      }
    }

    return promise;
  }
}
