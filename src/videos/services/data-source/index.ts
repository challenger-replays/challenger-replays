import { channelIds, playlistsLatestItemsList, search, uploadsPlaylistsIdList } from '../youtube';

export class DataSource {
  public async getFeed() {
    const ids = await uploadsPlaylistsIdList(channelIds);
    const latestVideos = await playlistsLatestItemsList(ids);
    return latestVideos;
  }

  public async getSearchResult(query: string /* , offset: number = 0 */) {
    const searchResult = await search(channelIds, query);
    return searchResult;
  }
}
