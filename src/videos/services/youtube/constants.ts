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

export { CHANNEL_IDS as channelIds };

export const playlistItemsListDefaultParams = {
  maxResults: 5,
  part: 'snippet',
  fields: 'items/snippet',
};

export const searchDefaultParams = {
  fields: 'items/id,items/snippet',
  maxResults: 50,
  order: 'date',
  part: 'snippet',
  regionCode: 'US',
  safeSearch: 'none',
  type: 'video',
  videoCaption: 'any',
  videoDefinition: 'any',
  videoDuration: 'any',
  videoEmbeddable: 'true',
  videoLicense: 'any',
  videoSyndicated: 'true',
  videoType: 'any',
};

export const uploadsPlaylistsIdListDefaultParams = {
  part: 'contentDetails',
  fields: 'items/contentDetails/relatedPlaylists/uploads',
};
