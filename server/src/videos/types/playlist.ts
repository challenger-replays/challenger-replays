import { BaseSnippet, BaseVideoId } from './base';

export interface PlaylistItemListItemSnippet extends BaseSnippet {
  playlistId: string;
  position: number;
  resourceId: BaseVideoId;
}

export interface PlaylistItemListItem {
  snippet: PlaylistItemListItemSnippet;
}

// youtube.playlistItems.list
export interface PlaylistItemList {
  items: [PlaylistItemListItem];
}

interface ChannelListItem {
  contentDetails: {
    relatedPlaylists: {
      uploads: string;
    },
  };
}

// youtube.channels.list
export interface ChannelList {
  items: ChannelListItem[];
}
