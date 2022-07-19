import { useState } from 'react';
import { apiRequest } from './instance/instance';
import { AxiosResponse } from 'axios';
import { CampaignItems } from '../types/campaign';

export const useCampaignMethod = () => {
  const [campaigns, setCampaigns] = useState<CampaignItems[]>([]);

  const updateCampaign = (response: AxiosResponse | void) => {
    if (response) {
      setCampaigns(response.data);
    }
  };
  const getCampaign = async () => {
    const response = await apiRequest.get('/campaign');
    updateCampaign(response);
  };

  const createCampaign = async () => {
    const newCampaign = {};
    const response = await apiRequest.post('/campaign', newCampaign);
    updateCampaign(response);
  };

  const editCampaign = async () => {
    const targetId = 0; // TODO: targetId 수정
    const editedCampaign = {};
    const response = await apiRequest.patch(targetId, editedCampaign);
    updateCampaign(response);
  };

  // const deleteCampaign = async () => {
  //   apiRequest.delete()
  // }

  return {
    campaigns,
    getCampaign,
    createCampaign,
    editCampaign,
  };
};
