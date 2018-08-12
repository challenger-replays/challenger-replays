import Router, { IRouterContext } from 'koa-router';
import { channelIds, playlistsLatestItemsList, uploadsPlaylistsIdList } from './services/youtube';

async function feed(ctx: IRouterContext) {
  const ids = await uploadsPlaylistsIdList(channelIds);
  const latestVideos = await playlistsLatestItemsList(ids);
  ctx.body = JSON.stringify(latestVideos, null, 2);
}

async function search(ctx: IRouterContext) {
  const { offset = 0, q: query } = ctx.query;
  ctx.body = `Page ${offset}: ${query}`;
}

const videos = new Router()
  .get('/feed', feed)
  .get('/search', search);

export default videos;
