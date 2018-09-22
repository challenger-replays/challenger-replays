import { BaseSnippet, Thumbnail } from '../types';

export function makeYoutubeChannelUrl(channelId: string): string {
  return `https://www.youtube.com/channel/${channelId}`;
}

export function makeYoutubeVideoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function mapItemThumbnails(snippet: BaseSnippet): Thumbnail {
  const { thumbnails } = snippet;
  return Object.keys(thumbnails)
    .map(key => {
      const { width, url } = thumbnails[key];
      return { [width]: url };
    })
    .reduce(
      (accum, value) => ({
        ...accum,
        ...value,
      }),
      {},
    );
}
