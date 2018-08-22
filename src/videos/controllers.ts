import Router, { IRouterContext } from 'koa-router';
import { DataSource } from './services/data-source';

const dataSource = new DataSource();

async function feed(ctx: IRouterContext) {
  const latestVideos = await dataSource.getFeed();
  ctx.body = JSON.stringify(latestVideos, null, 2);
}

async function search(ctx: IRouterContext) {
  const { q: query } = ctx.query;
  const searchResult = await dataSource.getSearchResult(query);
  ctx.body = JSON.stringify(searchResult, null, 2);
}

const videos = new Router()
  .get('/feed', feed)
  .get('/search', search);

export default videos;
