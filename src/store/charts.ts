import { atom, selectorFamily } from 'recoil';

export const dateData = atom({
  key: 'dateData',
  default: "",
});

export const isWeekData = atom({
  key: 'isWeekData',
  default: 6,
});

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

// default: [{
//   cost: 'cost',
//   convValue: 'convValue',
// }, {
//   roas: 'roas',
//   click: 'click'
// },
// {
//   imp: 'imp',
//   conv: 'conv'
// }
// ],

// platform에는 conv값이 없음

