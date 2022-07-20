import { atom, selector, selectorFamily } from 'recoil';
import { PlatformItem, dataParamType } from '../types/platform';
import { usePlatformModel } from '../api/models/usePlatformModel';

// //임시로 넣어놨어여 - 삭제해서 사용하셔도 됩니다
// const {
//   platformReport,
//   getPlatformReport,
//   getPlatformOverallChartData,
//   getPlatformBarChartData,
//   getPlatformTableData,
// } = usePlatformModel();

// export const platformAllData = selector<PlatformItem[]>({
//   key: 'platformAllData',
//   get: async () => {
//     const response = await fetchedPlatform();
//     return response;
//   },
// });

export const dateState = atom<dataParamType>({
  key: 'dateState',
  default: { date: new Date('2022-02-11'), day: 6 },
});

// export const filteredPlatformDate = selector({
//   key: 'filteredPlatformDate',
//   get: async ({ get }) => {
//     const date = get(dateState);
//     const response = await getPlatformChartData(date.date, date.day);
//     return response;
//   },
// });

// export const filteredPlatformSumDate = selector({
//   key: 'filteredPlatformSumDate',
//   get: async ({ get }) => {
//     const date = get(dateState);
//     const response = await getPlatformTableData(date.date, date.day);
//     return response;
//   },
// });
