import { Dated } from '../utils/dates';

interface Snippet extends Dated {
  channelId: string;
  channelTitle: string;
  description: string | undefined;
  title: string;
}

export interface PlaylistSnippet extends Snippet {
  playlistId: string | undefined;
  position: string | undefined;
}

export interface PlaylistSnippets {
  items: PlaylistSnippet[];
}

export interface PlaylistItem {
  snippet: PlaylistSnippet;
}

export interface PlaylistItems {
  items: PlaylistItem[];
}

export interface PlaylistIdsList {
  items: UploadsPlaylistId[];
}

export interface UploadsPlaylistId {
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    },
  };
}
