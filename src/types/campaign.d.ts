export interface CampaignItem {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  };
}

export type CampaignItems = CampaginItem[];

export interface Campaign {
  count: number;
  items: CampaignItems;
}
