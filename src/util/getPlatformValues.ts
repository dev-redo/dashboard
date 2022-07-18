import ChannelReport from "../data/channel-report.json";
import { PlatformAdData, PlatformItems } from "../types/platform";

const adDataKeyNameList = [
  "imp",
  "cost",
  "click",
  "roas",
  "convValue",
  "ctr",
  "cpc",
  "cpa",
] as (keyof PlatformAdData)[];

// TODO: 각 adData에 대해 name이 match되게끔 데이터 구조 수정
// TYPE 지정 필요
const adDataChartNameList = [
  "노출수",
  "광고단가",
  "클릭수",
  "매출수",
  "전환수",
  "클릭율",
  "클릭단가",
  "전환단가",
];

const createIntialCompanyData = () => ({
  facebook: 0,
  google: 0,
  kakao: 0,
  naver: 0,
});

export const getPlatformValues = (dateRange: string[]) => {
  // TODO: 백에서 해당 DATA 처리해줄 시
  // 제거 + 받아온 데이터 PlatformItems로 type assertion
  const receivedDateReduce = dateRange.reduce<PlatformItems>((acc, current) => {
    if (current) {
      const values = ChannelReport.filter(
        (value) => String(value.date) === String(current)
      ) as PlatformItems;
      acc.push(...values);
    }
    return acc;
  }, []);

  const initialCompanyAdData = adDataKeyNameList.reduce(
    (companyAdData, name) => {
      companyAdData[name] = createIntialCompanyData();
      return companyAdData;
    },
    {} as PlatformAdData
  );

  // TODO: data 종류(imp, roas 등등)에 따라 작업 다르게 진행
  // 현재는 sum만 돌림 -> 평균값 구해야 하는 애들의 경우 기간으로 나누기 필요
  const companyDataSum = receivedDateReduce.reduce<PlatformAdData>(
    (acc, curr) => {
      const { channel } = curr;

      adDataKeyNameList.forEach((name) => {
        const adDataValue = curr[name];
        acc[name][channel] += adDataValue;
      });

      return acc;
    },
    initialCompanyAdData
  );

  // TODO: adDataChartNameList data를 hash로 변경 후 로직 수정
  const companyAdData = adDataChartNameList.map((chart, idx) => {
    const chartData = adDataKeyNameList[idx];
    return { name: chart, [chartData]: companyDataSum[chartData] };
  });

  return companyAdData;
};
