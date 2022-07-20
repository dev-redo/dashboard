import { atom } from 'recoil';

export const isMonthData = atom({
  key: 'isMonthData',
  default: 6,
});

export const dynamicChartData = atom({
  key: 'dynamicChartData',
  default: [{
    firstData: 'roas',
    secondData: 'click',
  },
  {
    firstDataName: '투자 대비 수익',
    firstDataUnit: '원',
    secondDataUnit: '회',
    secondDataName: '클릭수',
  }
],
});
