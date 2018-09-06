import Koa from 'koa';
import compress from 'koa-compress';
import router from './routes';

const app = new Koa()
  .use(compress())
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
