import { Feed } from '../../adapters';
import { PlaylistIdsList } from '../../types';
import * as core from './core';

const CHANNEL_IDS = [
  'UCag4Obh282jX7jHPqWqQmkQ', // LOL Replays Collection
  'UCsVz2qkd_oGXGC66fcH4SFA', // Challenger Replays
  'UCJouTgWU7M8rO_svsIfSf9w', // Be Challenger
  'UCGgbmTgF-sUJGd5B5N6VSFw', // DotSpot
  'UCMVI1odiVz6DvwJcfkYQU9A', // LoL Pro Replays SoloQ
  'UCHB-XdZ5B8PmF-JlkpllKJQ', // Challenger Match
  'UCmgtmJxFHtwLPru3JRlki5A', // Lol Korean Pro Replays
  'UCejjkETjJXop6MP8eMjYL3g', // Bjergsen Stream
];

async function playlistsLatestItemsList(playlistIds: string[] = []) {
  if (0 === playlistIds.length) {
    return new Feed();
  }

  try {
    const promises = playlistIds.map(playlistId => core.playlistItemsList({
      playlistId,
      part: 'snippet',
      fields: 'items/snippet',
    }));
    const playlistsItemsList = (await Promise.all(promises))
      .map(response => response.data);
    return Feed.parse(playlistsItemsList);
  } catch (e) {
    throw e;
  }
}

async function uploadsPlaylistsIdList(channelIds: string[] = []): Promise<string[]> {
  if (0 === channelIds.length) {
    return [];
  }

  try {
    const response = await core.channelsList<PlaylistIdsList>({
      part: 'contentDetails',
      id: channelIds.join(','),
      fields: 'items/contentDetails/relatedPlaylists/uploads',
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

export {
  CHANNEL_IDS as channelIds,
  playlistsLatestItemsList,
  uploadsPlaylistsIdList,
};
