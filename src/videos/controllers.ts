import Router, { IRouterContext } from 'koa-router';
import {
  channelIds,
  playlistsLatestItemsList,
  search as youtubeSearch,
  uploadsPlaylistsIdList,
} from './services/youtube';

async function feed(ctx: IRouterContext) {
  const ids = await uploadsPlaylistsIdList(channelIds);
  const latestVideos = await playlistsLatestItemsList(ids);
  ctx.body = JSON.stringify(latestVideos, null, 2);
}

async function search(ctx: IRouterContext) {
  const { q: query } = ctx.query;
  const searchResult = await youtubeSearch(channelIds, query);
  ctx.body = JSON.stringify(searchResult, null, 2);
}

const videos = new Router()
  .get('/feed', feed)
  .get('/search', search);

export default videos;
