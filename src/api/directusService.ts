// directusService.ts

import axios from 'axios';
const baseURL = 'https://museum.mobility.tw1.ru';

export const fetchItems = async (collection: string) => {
  try {
    console.log("START RESPONSE")
    const response = await axios.get(`https://museum.mobility.tw1.ru/items/exhibits?fields=*,images.directus_files_id.filename_disk`);
    console.log("response", response)
    return response;
  } catch (error) {
    console.error('Failed to fetch items', error);
    return [];
  }
};

export const fetchImg = async (uuid) => {
  try {
    console.log("START RESPONSE")
    const response = await axios.get(`https://museum.mobility.tw1.ru/assets/67c3f4dd-c49a-4267-9b61-5bb6166cb5a0.jpg`);
    console.log("response", response)
    return response;
  } catch (error) {
    console.error('Failed to fetch items', error);
    return [];
  }
};