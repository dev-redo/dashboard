import { CampaignItems } from '../types/campaign';
import { PlatformItems } from './../types/platform.d';
import { api } from './api';

export const fetchedOverall = async () => {
  try {
    return await api.getOverall();
  } catch (error) {
    console.error(error);
  }
};

export const fetchedPlatform = async () => {
  const platform: PlatformItems = [];
  try {
    const response = await api.getPlatform();
    platform.push(response.data);
  } catch (error) {
    console.error(error);
  }

  return platform;
};

export const fetchedCampaign = () => {
  const campaign: CampaignItems = [];
  try {
    api.getOverall().then(response => {
      campaign.push(response);
    });
  } catch (error) {
    console.error(error);
  }
  return campaign;
};
