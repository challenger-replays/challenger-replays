import { compareYoutubeDates } from '../../utils/dates';
import { BaseSnippet, SearchList, SearchListItem, Snippet, Thumbnail } from '../types';
export * from './Feed';

function mapItemThumbnails(snippet: BaseSnippet): Thumbnail {
  const { thumbnails } = snippet;
  return Object.keys(thumbnails)
    .map(key => {
      const { width } = thumbnails[key];
      return { [width]: thumbnails[key].url};
    })
    .reduce((accum, value) => ({
      ...accum,
      ...value,
    }), {});
}

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
