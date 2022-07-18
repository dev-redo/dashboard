import { useState } from 'react';
import { dataRequest } from '../services/service';
import { AxiosResponse } from 'axios';

export const useCampaginMethod = () => {
  const [campagins, setCampagins] = useState([]);

  const updateCampagin = (response: AxiosResponse | void) => {
    if (response) {
        setCampagins(response.data);
    }
  };
  const getCampagin = async () => {
    const response = await dataRequest.get('/campagins');
    updateCampagin(response);
  };

  return {
    campagins,
    getCampagin,
  };
};