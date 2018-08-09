'use strict';

const { YOUTUBE_DATA_API_KEY: API_KEY } = process.env;
if ('string' !== typeof API_KEY || 0 === API_KEY.length) {
  throw new Error('YOUTUBE_DATA_API_KEY not found');
}
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const axios = require('axios').create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

async function request(url, params = {}, method = 'get') {
  try {
    return await axios.request({
      url,
      method,
      params,
    });
  } catch (e) {
    throw e;
  }
}

async function channelsList(params) {
  const response = await request('/channels', params);
  return response;
}

async function playlistItemsList(params) {
  const response = await request('/playlistItems', params);
  return response;
}

module.exports = {
  channelsList,
  playlistItemsList,
};
