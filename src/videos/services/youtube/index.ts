export { channelIds } from './constants';

import { compareYoutubeDates } from '../../../utils/dates';
import { Feed } from '../../adapters';
import { PlaylistIdsList, SearchResultItem } from '../../types';
import * as constants from './constants';
import * as core from './core';

export async function playlistsLatestItemsList(playlistIds: string[] = []) {
  if (0 === playlistIds.length) {
    return new Feed();
  }

  try {
    const promises = playlistIds.map(playlistId => core.playlistItemsList({
      ...constants.playlistItemsListDefaultParams,
      playlistId,
    }));
    const playlistsItemsList = (await Promise.all(promises))
      .map(response => response.data);
    return Feed.parse(playlistsItemsList);
  } catch (e) {
    throw e;
  }
}

export async function search(channelIds: string[] = [], query: string) {
  try {
    const promises = channelIds.map(channelId => core.searchList({
      ...constants.searchDefaultParams,
      channelId,
      q: query,
    }));

    const searchResults = (await Promise.all(promises))
      .map(response => response.data)
      .reduce((result, searchResult) => result.concat(searchResult.items), ([] as SearchResultItem[]));

    const compareDates = compareYoutubeDates();
    searchResults.sort((lhs, rhs) => {
      return compareDates(lhs.snippet, rhs.snippet);
    });

    // Cache response for query

    return searchResults;
  } catch (e) {
    throw e;
  }
}

export async function uploadsPlaylistsIdList(channelIds: string[] = []): Promise<string[]> {
  if (0 === channelIds.length) {
    return [];
  }

  try {
    const response = await core.channelsList<PlaylistIdsList>({
      ...constants.uploadsPlaylistsIdListDefaultParams,
      id: channelIds.join(','),
    });

    const uploadsPlaylistsId: string[] = response.data.items
    .map(item => {
      try {
        return item.contentDetails.relatedPlaylists.uploads;
      } catch (_) {
        return undefined;
      }
    })
    .filter(item => Boolean(item)) as string[];

    return uploadsPlaylistsId;
  } catch (e) {
    throw e;
  }
}
