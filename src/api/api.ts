import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const api = {
  getOverall: () =>
    axios.get(`${BASE_URL}/overall`).then((response) => response.data),
  getCampaign: () =>
    axios.get(`${BASE_URL}/campaign`).then((response) => response.data),
  getPlatform: () =>
    axios.get(`${BASE_URL}/platform`).then((response) => response.data),
};

/*
지난 플젝 수빈님 방식

export const api = {
  getOverall: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
*/
