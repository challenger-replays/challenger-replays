import { compareYoutubeDates } from '../../utils/dates';
import { SearchList, SearchListItem, Snippet } from '../types';
import {
  makeYoutubeChannelUrl,
  makeYoutubeVideoUrl,
  mapItemThumbnails,
} from './utils';

export function mapSearchListsToSnippet(lists: SearchList[]): Snippet[] {
  const items = lists.reduce(
    (accum, searchResult) => accum.concat(searchResult.items),
    new Array<SearchListItem>(),
  );

  const compareDates = compareYoutubeDates('desc');
  items.sort((lhs, rhs) => {
    return compareDates(lhs.snippet, rhs.snippet);
  });

  return items.map(item => {
    const { id, snippet } = item;
    const { videoId } = id;
    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    return {
      channelId,
      channelTitle,
      channelUrl: makeYoutubeChannelUrl(channelId),
      description,
      publishedAt,
      title,
      thumbnails: mapItemThumbnails(snippet),
      videoId,
      videoUrl: makeYoutubeVideoUrl(videoId),
    };
  });
}
