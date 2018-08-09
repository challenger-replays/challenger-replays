'use strict';

const Router = require('koa-router');
const videos = require('./videos/controllers');

const router = new Router()
  .use('/videos', videos.routes());

module.exports = router;
