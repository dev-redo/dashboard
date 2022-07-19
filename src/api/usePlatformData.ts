import { api } from "./api";
import {
  PlatformItems,
  PlatformAdData,
  PlatformSumType,
  AdPlatformData,
} from "../types/platform";
import { add, format } from "date-fns";
import axios from "axios";

const platform: PlatformItems = [];

const platformKeyNameList = [
  "imp",
  "cost",
  "click",
  "roas",
  "convValue",
  "ctr",
  "cpc",
  "cpa",
  "cvr",
] as (keyof PlatformAdData)[];

const platformKeyList = [
  "facebook",
  "google",
  "kakao",
  "naver",
] as (keyof AdPlatformData)[];

const platformNameList = ["페이스북", "구글", "카카오", "네이버"];

const createIntialCompanyData = () => ({
  facebook: 0,
  google: 0,
  kakao: 0,
  naver: 0,
});

const createIntialAdData = () => ({
  imp: 0,
  cost: 0,
  click: 0,
  roas: 0,
  convValue: 0,
  ctr: 0,
  cvr: 0,
  cpc: 0,
  cpa: 0,
});

//모든 채널 데이터 가져오기
export const fetchedPlatform = async () => {
  try {
    const response = await api.getPlatform();
    platform.push(response.data);
  } catch (error) {
    console.error(error);
  }

  return platform;
};

export const getPlatformData = async (date: Date, day: number) => {
  const startDate = format(date, "yyyy-MM-dd");
  const endDate = format(add(date, { days: day }), "yyyy-MM-dd");

  try {
    const response = await axios.get(
      `http://localhost:8000/platform?date_gte=${startDate}&date_lte=${endDate}`
    );

    const initialCompanyAdData = platformKeyNameList.reduce(
      (companyAdData, name) => {
        companyAdData[name] = createIntialCompanyData();
        return companyAdData;
      },
      {} as PlatformAdData
    );

    //합산 데이터로 넣기
    let platformData = response.data.reduce((acc: any, curr: any) => {
      const { channel } = curr;

      platformKeyNameList.forEach((name) => {
        const adDataValue = curr[name];
        acc[name][channel] += adDataValue;
      });

      return acc;
    }, initialCompanyAdData);

    //평균값으로 재할당
    for (let name in platformData) {
      if (name === "roas" || name === "ctr" || name === "cvr") {
        for (let channel in platformData[name]) {
          const avgValue =
            Math.round((platformData[name][channel] / day + 1) * 100) / 100;
          platformData[name][channel] = avgValue;
        }
      }
    }

    //합산 데이터
    let platformSumData: object[] = [];

    Object.keys(platformData).forEach((value) => {
      let sum = 0;
      let sumObj: PlatformSumType = { name: value, sum: 0 };
      for (let name in platformData[value]) {
        sum += platformData[value][name];
      }
      sumObj.sum = sum;
      platformSumData.push(sumObj);
    });

    return { platformData, platformSumData };
  } catch (error) {
    console.error(error);
  }
};

//테이블
export const getPlatformTableData = async (date: Date, day: number) => {
  const startDate = format(date, "yyyy-MM-dd");
  const endDate = format(add(date, { days: day }), "yyyy-MM-dd");

  try {
    const response = await axios.get(
      `http://localhost:8000/platform?date_gte=${startDate}&date_lte=${endDate}`
    );

    const initialAdPlatformData = platformKeyList.reduce(
      (companyAdData, name) => {
        companyAdData[name] = createIntialAdData();
        return companyAdData;
      },
      {} as AdPlatformData
    );

    let adDataSum = response.data.reduce((acc: any, curr: any) => {
      const { channel } = curr;

      platformKeyNameList.forEach((name) => {
        const adDataValue = curr[name];
        acc[channel][name] += adDataValue;
      });

      return acc;
    }, initialAdPlatformData);

    for (let channel in adDataSum) {
      //console.log(adDataSum[channel]);

      for (let name in adDataSum[channel]) {
      }
    }

    const companyAdData = platformNameList.map((platform, idx) => {
      const tableData = platformKeyList[idx];
      return { name: platform, tableData: adDataSum[tableData] };
    });

    return companyAdData;
  } catch (error) {
    console.error(error);
  }
};
