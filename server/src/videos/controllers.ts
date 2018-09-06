import Router, { IRouterContext } from 'koa-router';
import { DataSource } from './services/data-source';

const dataSource = new DataSource();

async function feed(ctx: IRouterContext) {
  const latestVideos = await dataSource.getFeed();
  ctx.body = JSON.stringify(latestVideos);
}

async function search(ctx: IRouterContext) {
  const { q: query, offset } = ctx.query;
  const searchResult = await dataSource.getSearchResult(query, offset);
  ctx.body = JSON.stringify(searchResult);
  ctx.set({
    Connection: 'keep-alive',
  });
}

const videos = new Router()
  .use(async (ctx, next) => {
    await next();
    ctx.set({
      Connection: 'close',
      ...ctx.response.header,
      'Content-Language': 'en-US',
      'Content-Type': 'application/json; charset=utf-8',
    });
  })
  .get('/feed', feed)
  .get('/search', search);

export default videos;
