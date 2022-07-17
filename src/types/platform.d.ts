export interface PlatformItem {
  channel: string;
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

export type PlatformItems = PlatformItem[];

export interface Platform {
  daily: PlatformItems;
}
