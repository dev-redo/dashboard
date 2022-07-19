import { atom, selector, selectorFamily } from "recoil";
import { PlatformItem, dataParamType } from "../types/platform";
import { fetchedPlatform, getPlatformData } from "../api/usePlatformData";

export const platformAllData = selector<PlatformItem[]>({
  key: "platformAllData",
  get: async () => {
    const response = await fetchedPlatform();
    return response;
  },
});

export const dateState = atom<dataParamType>({
  key: "dateState",
  default: { date: new Date("2022-02-11"), day: 6 },
});

export const filteredPlatformDate = selector({
  key: "filteredPlatformDate",
  get: async ({ get }) => {
    const date = get(dateState);
    const response = await getPlatformData(date.date, date.day);
    return response?.platformData;
  },
});

export const filteredPlatformSumDate = selector({
  key: "filteredPlatformSumDate",
  get: async ({ get }) => {
    const date = get(dateState);
    const response = await getPlatformData(date.date, date.day);
    return response?.platformSumData;
  },
});
