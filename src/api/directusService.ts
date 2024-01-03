// directusService.ts

import axios from 'axios';
const baseURL = 'https://museum.mobility.tw1.ru';

export const fetchItems = async (collection: string) => {
  try {
    console.log("START RESPONSE")
    const response = await axios.get(`https://admin.rus-museum.ru/items/${collection}`);
    console.log("response", response)
    return response;
  } catch (error) {
    console.error('Failed to fetch items', error);
    return [];
  }
};
