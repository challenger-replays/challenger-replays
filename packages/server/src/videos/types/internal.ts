import { Dated } from '../../utils/dates';

export interface Thumbnail {
  [key: string]: string;
}

export interface Snippet extends Dated {
  channelId: string;
  channelTitle: string;
  channelUrl: string;
  description: string;
  title: string;
  thumbnails: Thumbnail;
  videoId: string;
  videoUrl: string;
}

export interface Response {
  snippets: Snippet[];
  limit?: number;
  offset?: number;
  total?: number;
}
