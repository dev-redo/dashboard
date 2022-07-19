import { PlatformItems } from './../../types/platform.d';
import { useState } from 'react';
import { apiRequest } from '../instance/instance';
import { AxiosResponse } from 'axios';

export const usePlatformModel = () => {
  const [platformReport, setPlatformReport] = useState<
    PlatformItems[]
  >([]);

  const updateplatformReport = (response: AxiosResponse | void) => {
    if (response) {
      setPlatformReport(response.data);
    }
  };

  const getPlatformReport = async () => {
    const response = await apiRequest.get('/platform');
    updateplatformReport(response);
  };

  return {
    platformReport,
    getPlatformReport,
  };
};
