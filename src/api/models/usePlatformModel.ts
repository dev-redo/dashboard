import {
  PlatformItems,
  PlatformAdData,
  PlatformNameType,
} from './../../types/platform.d';
import { useState } from 'react';
import { apiRequest } from '../instance/instance';
import { AxiosResponse } from 'axios';
import { add, format } from 'date-fns';

const platformKeyNameList = [
  'imp',
  'cost',
  'click',
  'roas',
  'convValue',
  'ctr',
  'cpc',
  'cpa',
  'cvr',
] as (keyof PlatformAdData)[];

const platformNameKeyList = [
  'facebook',
  'google',
  'kakao',
  'naver',
] as (keyof PlatformNameType)[];

const platformNameList = ['페이스북', '구글', '카카오', '네이버'];

const createIntialChannelData = () => ({
  facebook: 0,
  google: 0,
  kakao: 0,
  naver: 0,
});

const createIntialAdData = () => ({
  imp: 0,
  cost: 0,
  click: 0,
  roas: 0,
  convValue: 0,
  ctr: 0,
  cvr: 0,
  cpc: 0,
  cpa: 0,
});

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

  //chart data
  const getPlatformChartData = (date: Date, day: number) => {
    const startDate = format(date, 'yyyy-MM-dd');
    const endDate = format(add(date, { days: day }), 'yyyy-MM-dd');

    try {
    } catch (error) {
      console.log(error);
    }
  };

  //table data

  return {
    platformReport,
    getPlatformReport,
  };
};
