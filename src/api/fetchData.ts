import { CampaignItems } from '../types/campaign';
import { OverallItem, OverallItems } from './../types/overall.d';
import { PlatformItems } from './../types/platform.d';
import { api } from './api';

// TODO: 여기서 dateFormat 같은거 쓰면 될 거같아요

export const fetchedOverall = async () => {
  // const overall: OverallItems = [];
  try {
    return await api.getOverall();
  } catch (error) {
    console.error(error);
  }
};

export const fetchedPlatform = () => {
  const platform: PlatformItems = [];
  try {
    api.getOverall().then(response => {
      platform.push(response);
    });
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
