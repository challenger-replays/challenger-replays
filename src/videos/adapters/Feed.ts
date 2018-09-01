import * as dates from '../../utils/dates';
import {
  BaseSnippet,
  PlaylistItemList,
  PlaylistItemListItem,
  Snippet,
  Thumbnail,
} from '../types';

function isFresh(item: dates.Dated) {
  const publishedAt = dates.parseYoutubeDate(item);
  const deltaInDays = (Date.now() - publishedAt.getMilliseconds()) / (1000 * 60 * 60 * 24);
  return deltaInDays < 6;
}

function mapItemThumbnails(snippet: BaseSnippet): Thumbnail {
  const { thumbnails } = snippet;
  return Object.keys(thumbnails)
    .map(key => {
      const { width } = thumbnails[key];
      return { [width]: thumbnails[key].url};
    })
    .reduce((accum, value) => ({
      ...accum,
      ...value,
    }), {});
}

function mapItemToSnippet(item: PlaylistItemListItem): Snippet {
  const { snippet } = item;
  const { channelId, channelTitle, title, publishedAt } = snippet;
  const { videoId } = snippet.resourceId;
  return {
    channelId,
    channelTitle,
    publishedAt,
    title,
    thumbnails: mapItemThumbnails(snippet),
    videoId,
  };
}

export class Feed {
  public readonly items: Snippet[];

  public static parse(playlistsItems: PlaylistItemList[] = [], length = 12): Feed {
      const snippetsList = playlistsItems
        .filter(playlist => (playlist.items || []).length > 0)
        .map(playlist => playlist.items.map(mapItemToSnippet));

      if (0 === snippetsList.length) {
        throw new TypeError(`Invalid 'playlistsItems' argument: ${playlistsItems}`);
      }

      const dateDescComparator = dates.compareYoutubeDates('desc');

      snippetsList.forEach(snippets => snippets.sort(dateDescComparator));

      const necessary = snippetsList
        .map(snippets => snippets[0])
        .filter(item => isFresh(item));

      const tails = snippetsList.map(snippets => snippets.slice(1));
      const extras = new Array<Snippet>()
        .concat(...tails)
        .sort(dateDescComparator);

      const items = necessary
        .concat(extras)
        .slice(0, length)
        .sort(dateDescComparator);

      return new Feed(items);
  }

  constructor(items: Snippet[] = []) {
    this.items = [...items];
  }
}
