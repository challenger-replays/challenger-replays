import { BaseSnippet, BaseVideoId } from './base';

export interface SearchListItem {
  id: BaseVideoId;
  snippet: BaseSnippet;
}

export interface SearchList {
  items: SearchListItem[];
}
