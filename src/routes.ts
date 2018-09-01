import Router from 'koa-router';
import videos from './videos/controllers';

const router = new Router({
  prefix: '/api/v1',
})
  .use('/videos', videos.routes());

export default router;
