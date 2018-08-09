'use strict';

const Koa = require('koa');
const router = require('./routes');

const app = new Koa()
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app;
