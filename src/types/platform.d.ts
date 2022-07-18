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

type Channel = {
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
