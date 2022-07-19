export interface PlatformItem {
  channel: keyof Channel;
  date: string;
  imp: number;
  click: number;
  cost: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
}

export type Channel = {
  facebook: number;
  google: number;
  kakao: number;
  naver: number;
};

export type PlatformAdData = {
  imp: Channel;
  cost: Channel;
  click: Channel;
  roas: Channel;
  convValue: Channel;
  ctr: Channel;
  cvr: Channel;
  cpc: Channel;
  cpa: Channel;
};

export type PlatformItems = PlatformItem[];

export interface Platform {
  daily: PlatformItems;
}

export interface PlatformSumType {
  name: string;
  sum: number;
}

export interface dataParamType {
  date: Date;
  day: number;
}

type Ad = {
  imp: number;
  cost: number;
  click: number;
  roas: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
};

export interface PlatformNameType {
  facebook: Ad;
  google: Ad;
  kakao: Ad;
  naver: Ad;
}
