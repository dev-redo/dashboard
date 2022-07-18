import { useState } from 'react';
import { apiRequest } from './instance/instance';
import { AxiosResponse } from 'axios';

export const useCampaignMethod = () => {
  const [campaigns, setCampaigns] = useState([]);

  const updateCampaign = (response: AxiosResponse | void) => {
    if (response) {
      setCampaigns(response.data);
    }
  };
  const getCampaign = async () => {
    const response = await apiRequest.get('/campaign');
    updateCampaign(response);
  };

  return {
    campaigns,
    getCampaign,
  };
};
