import * as dates from '../../utils/dates';
import { PlaylistItems, PlaylistSnippets, Snippet } from '../types';

function isFresh(item: Snippet) {
  const publishedAt = dates.parseYoutubeDate(item);
  const deltaInDays = (Date.now() - publishedAt.getMilliseconds()) / (1000 * 60 * 60 * 24);
  return deltaInDays < 6;
}

export default function Feed(this: any, playlistsItems: PlaylistItems[] = [], length = 12) {
  if (!(this instanceof Feed)) {
    throw new TypeError('Feed is a constructor');
  }

  const playlists: PlaylistSnippets[] = playlistsItems
    .filter(playlist => (playlist.items || []).length > 0)
    .map(playlist => { // Remove 'snippet' wrapper
      const snippets = playlist.items.map(item => ({
        ...item.snippet,
        description: undefined,
        playlistId: undefined,
        position: undefined,
      }));
      return {
        items : snippets,
      };
    });

  if (0 === playlists.length) {
    throw new TypeError(`Invalid 'playlistsItems' argument: ${playlistsItems}`);
  }

  const dateDescComparator = dates.compareYoutubeDates('desc');

  playlists.forEach(playlist => playlist.items.sort(dateDescComparator));

  const necessary = playlists
    .map(playlist => playlist.items[0])
    .filter(item => isFresh(item));

  const tails = playlists.map(playlist => playlist.items.slice(1));
  const extras = ([] as Snippet[])
    .concat(...tails)
    .sort(dateDescComparator);

  const items = necessary
    .concat(extras)
    .splice(0, length)
    .sort(dateDescComparator);
  this.items = [...items];
}
