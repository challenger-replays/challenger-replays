'use strict';

const Router = require('koa-router');
const { channelIds, playlistsLatestItemsList, uploadsPlaylistsIdList } = require('./services/youtube');

async function feed(ctx) {
  const ids = await uploadsPlaylistsIdList(channelIds);
  const latestVideos = await playlistsLatestItemsList(ids);
  ctx.body = JSON.stringify(latestVideos, null, 2);
}

async function search(ctx) {
  const { offset = 0, q: query } = ctx.query;
  ctx.body = `Page ${offset}: ${query}`;
}

const videos = new Router()
  .get('/feed', feed)
  .get('/search', search);

module.exports = videos;
