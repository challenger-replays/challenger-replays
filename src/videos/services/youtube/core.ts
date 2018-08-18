import Axios from 'axios';
import { PlaylistItems } from '../../types';

const { YOUTUBE_DATA_API_KEY: API_KEY } = process.env;
if ('string' !== typeof API_KEY || 0 === API_KEY.length) {
  throw new Error('YOUTUBE_DATA_API_KEY not found');
}

const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

const axios = Axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

async function request<T>(url: string, params = {}, method = 'get') {
  try {
    return await axios.request<T>({
      url,
      method,
      params,
    });
  } catch (e) {
    throw e;
  }
}

export function channelsList<T>(params?: {}) {
  return request<T>('/channels', params);
}

export function playlistItemsList(params?: {}) {
  return request<PlaylistItems>('/playlistItems', params);
}
