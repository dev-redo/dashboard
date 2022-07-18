import { CampaignItems } from '../types/campaign';
import { OverallItems } from './../types/overall.d';
import { PlatformItems } from './../types/platform.d';
import { api } from './api';

// TODO: 여기서 dateFormat 같은거 쓰면 될 거같아요

export const fetchedOverall = () => {
  const overall: OverallItems = [];
  try {
    api.getOverall().then((response) => {
      // FIXME: then을 api.ts에서도 쓰고 여기서도 쓰고 있음 :
      overall.push(response);
    });
  } catch (error) {
    console.error(error);

    return overall;
  }
};

export const fetchedPlatform = () => {
  const platform: PlatformItems = [];
  try {
    api.getOverall().then((response) => {
      platform.push(response);
    });
  } catch (error) {
    console.error(error);

    return platform;
  }
};

export const fetchedCampaign = () => {
  const campaign: CampaignItems = [];
  try {
    api.getOverall().then((response) => {
      campaign.push(response);
    });
  } catch (error) {
    console.error(error);

    return campaign;
  }
};
