import { useState } from 'react';
import { dataRequest } from '../services/service';
import { AxiosResponse } from 'axios';

import { OverallItems } from '../../types/overall';

export const useOverallModel = () => {
  const [reports, setReports] = useState<OverallItems[]>([]);

  const updateReports = (response: AxiosResponse | void) => {
    if (response) {
      setReports(response.data);
    }
  };

  const getReports = async () => {
    const response = await dataRequest.get('');
    updateReports(response);
  };

  const getReportsById = async (url: string = '') => {
    // 해당 id 가져오기 (검색)
    const response = await dataRequest.get(url);
    if (response) return response.data;
  };

  const patchReportById = async (id: number, data: {}) => {
    return await dataRequest.patch(id, data);
  };

  return {
    reports,
    getReports,
    getReportsById,
    patchReportById,
  };
};
