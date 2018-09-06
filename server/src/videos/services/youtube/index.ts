import { mapPlaylistItemListsToSnippets, mapSearchListsToSnippet } from '../../adapters';
import { Snippet } from '../../types';
import * as constants from './constants';
import * as core from './core';

export async function playlistsLatestItemsList(playlistIds: string[] = []): Promise<Snippet[]> {
  if (0 === playlistIds.length) {
    return [];
  }

  try {
    const promises = playlistIds.map(playlistId => core.playlistItemsList({
      ...constants.playlistItemsListDefaultParams,
      playlistId,
    }));
    const playlistsItemsList = (await Promise.all(promises))
      .map(response => response.data);
    return mapPlaylistItemListsToSnippets(playlistsItemsList);
  } catch (e) {
    throw e;
  }
}

export async function search(channelIds: string[] = [], query: string): Promise<Snippet[]> {
  try {
    const promises = channelIds.map(channelId => core.searchList({
      ...constants.searchDefaultParams,
      channelId,
      q: query,
    }));

    const searchLists = (await Promise.all(promises))
      .map(response => response.data);
    return mapSearchListsToSnippet(searchLists);
  } catch (e) {
    throw e;
  }
}

export async function uploadsPlaylistsIdList(channelIds: string[] = []): Promise<string[]> {
  if (0 === channelIds.length) {
    return [];
  }

  try {
    const response = await core.channelsList({
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
      .filter(item => 'string' === typeof item) as string[];

    return uploadsPlaylistsId;
  } catch (e) {
    throw e;
  }
}

export { channelIds } from './constants';
