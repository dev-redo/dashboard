import {
  PlatformAdData,
  PlatformNameType,
} from './../../types/platform.d';

export const platformKeyNameList = [
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

export const platformChannelList = [
  'facebook',
  'google',
  'kakao',
  'naver',
] as (keyof PlatformNameType)[];

export const platformNameList = [
  '페이스북',
  '구글',
  '카카오',
  '네이버',
];

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

export const initialChartFormat = platformKeyNameList.reduce(
  (companyAdData, name) => {
    companyAdData[name] = createIntialChannelData();
    return companyAdData;
  },
  {} as PlatformAdData,
);

export const initialTableFormat = platformChannelList.reduce(
  (companyAdData, name) => {
    companyAdData[name] = createIntialAdData();
    return companyAdData;
  },
  {} as PlatformNameType,
);
