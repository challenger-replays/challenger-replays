import { compareYoutubeDates } from '../../utils/dates';
import { SearchList, SearchListItem, Snippet} from '../types';
import { mapItemThumbnails } from './mapPlaylistItemListsToSnippets';

export * from './mapPlaylistItemListsToSnippets';

export function mapSearchListsToSnippet(lists: SearchList[]): Snippet[] {
  const items = lists.reduce((accum, searchResult) => accum.concat(searchResult.items), new Array<SearchListItem>());

  const compareDates = compareYoutubeDates('desc');
  items.sort((lhs, rhs) => {
    return compareDates(lhs.snippet, rhs.snippet);
  });

  return items.map(item => {
    const { id, snippet } = item;
    const { channelId, channelTitle, title, publishedAt } = snippet;
    return {
      channelId,
      channelTitle,
      publishedAt,
      title,
      thumbnails: mapItemThumbnails(snippet),
      videoId: id.videoId,
    };
  });
}
