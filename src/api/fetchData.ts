import { OverallItems } from './../types/overall.d';
import { api } from './api';

export const fetchedOverall = () => {
  const overall: OverallItems = [];
  try {
    api.getOverall().then((response) => {
      // FIXME: then을 api.ts에서도 쓰고 여기서도 쓰고 있음
      overall.push(response);
    });
  } catch (error) {
    console.error(error);
  }
  return overall;
};
/*
export const fetchedPlatform = async () => {
  try {
    const paltform = await api.getPlatform();
    return paltform;
  } catch (error) {
    console.error(error);
  }
};

export const fetchedCampagin = async () => {
  try {
    const campagin = await api.getCampaign();
    return campagin;
  } catch (error) {
    console.error(error);
  }
};
*/
