import { Dated } from '../../utils/dates';

export interface BaseThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface BaseVideoId {
  kind: string;
  videoId: string;
}

export interface BaseSnippet extends Dated {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  title: string;
  thumbnails: {
    [key: string]: BaseThumbnail;
  };
}
