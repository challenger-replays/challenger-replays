'use strict';

const Koa = require('koa');

const app = new Koa().use(async (ctx, next) => {
  await next();
  ctx.body = 'Hello from Koa :-)';
});

module.exports = app;
