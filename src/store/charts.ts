import { atom, selectorFamily } from 'recoil';

// 광고비COST 십만-오십만단위
// 매출 ROAS 백-천단위
// 노출수 IMP 만-삼십만단위
// 클릭수 CLICK 백단위
// 전환수 CONV 십단위

// 전환값 CONVVALUE 십-백만단위
// platform에는 conv값이 없음

export const chartFirstData = atom({
  key: 'chartFirstData',
  default: "roas",
});

export const chartSecondData = atom({
  key: 'chartSecondData',
  default: "click",
});

export const isWeekData = atom({
  key: 'isWeekData',
  default: 6,
});

export const isMonthData = atom({
  key: 'isMonthData',
  default: 30,
});


