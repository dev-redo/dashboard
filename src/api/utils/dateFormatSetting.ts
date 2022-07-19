import { AxiosResponse } from 'axios';
import format from 'date-fns/format';
import { OverallItem } from './../../types/overall.d';

export const dateFormatSetting = (response: AxiosResponse | void) => {
  if (!response) return;

  // const overallItem = response.data.map((item: OverallItem) => {
  //   const date = new Date(item.date);
  //   // const yearMonthDate = format(date, 'yyy년MM월dd일');
  //   // const monthDate = format(date, 'MM월 dd일');

  //   return { ...item, yearMonthDate, monthDate };
  // });
  const list = response.data

  return list;
};
