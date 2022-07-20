import { atom } from 'recoil';
import { CampaignItem } from '../types/campaign';

export const campaignRequestType = atom({
  key: 'campaignRequestId',
  default: '',
});

export const campaignItemState = atom<CampaignItem[]>({
  key: 'campaignItem',
  default: [
    {
      id: 0,
      adType: '',
      title: '',
      budget: 0,
      status: '',
      startDate: '',
      endDate: '',
      report: {
        cost: 0,
        convValue: 0,
        roas: 0,
      },
    },
  ],
});
