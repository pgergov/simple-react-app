import axios from 'axios';

const API_URL = 'http://localhost:8000';
const dataExtractor = res => res.data;

export const GoodsService = {
  getGoodies() {
    let url = `${API_URL}/goods/list/`;

    return axios.get(url).then(dataExtractor);
  }
};
