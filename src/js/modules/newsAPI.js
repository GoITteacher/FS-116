import axios from 'axios';
import { PAGE_SIZE } from '../constants';

export async function getArticles(query, page) {
  const baseUrl = 'https://newsapi.org/v2';
  const endPoint = '/everything';
  const url = baseUrl + endPoint;

  const params = {
    q: query,
    page: page,
    pageSize: PAGE_SIZE,
  };

  const headers = {
    'X-Api-Key': 'c8747511a2c34730a83caaff4f3693e7',
  };

  const res = await axios.get(url, { params, headers });
  return res.data;
}
