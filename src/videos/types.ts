import { Dated } from '../utils/dates';

export interface Snippet extends Dated {
  description: string | undefined;
  playlistId: string | undefined;
  position: string | undefined;
}

export interface PlaylistSnippets {
  items: Snippet[];
}

export interface PlaylistItem {
  snippet: Snippet;
}

export interface PlaylistItems {
  items: PlaylistItem[];
}
