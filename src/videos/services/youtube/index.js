'use strict';

const core = require('./core');
const { Feed } = require('../../adapters');

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

async function playlistsLatestItemsList(playlistIds = []) {
  if (0 === playlistIds.length) {
    return [];
  }

  try {
    const promises = playlistIds.map(playlistId => core.playlistItemsList({
      playlistId,
      part: 'snippet',
      fields: 'items/snippet',
    }));
    const playlistsItemsList = (await Promise.all(promises))
      .map(response => response.data);
    return new Feed(playlistsItemsList);
  } catch (e) {
    throw e;
  }
}

async function uploadsPlaylistsIdList(channelIds = []) {
  if (0 === channelIds.length) {
    return [];
  }

  try {
    const response = await core.channelsList({
      part: 'contentDetails',
      id: channelIds.join(','),
      fields: 'items/contentDetails/relatedPlaylists/uploads',
    });

    const uploadsPlaylistsId = response.data.items.map((item) => {
      try {
        return item.contentDetails.relatedPlaylists.uploads;
      } catch (_) {
        return undefined;
      }
    }).filter(item => Boolean(item));

    return uploadsPlaylistsId;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  channelIds: CHANNEL_IDS,
  playlistsLatestItemsList,
  uploadsPlaylistsIdList,
};
