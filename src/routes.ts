import Router from 'koa-router';
import videos from './videos/controllers';

const router = new Router()
  .use('/videos', videos.routes());

export default router;
