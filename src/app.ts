import Koa from 'koa';
import router from './routes';

const app = new Koa()
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
