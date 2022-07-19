import {
  PlatformItems,
  PlatformSumType,
} from './../../types/platform.d';
import { useState } from 'react';
import { apiRequest } from '../instance/instance';
import { AxiosInstance, AxiosResponse } from 'axios';
import { add, format } from 'date-fns';
import axios from 'axios';
import {
  platformKeyNameList,
  platformChannelList,
  platformNameList,
  initialChartFormat,
  initialTableFormat,
} from '../utils/platformDataFormat';

interface DataType {
  [x: string]: any;
  channel?: any;
}

export const usePlatformModel = () => {
  const [platformReport, setPlatformReport] = useState<
    PlatformItems[]
  >([]);

  const updateplatformReport = (response: AxiosResponse | void) => {
    if (response) {
      setPlatformReport(response.data);
    }
  };

  const getPlatformReport = async () => {
    const response = await apiRequest.get('/platform');
    updateplatformReport(response);
  };

  const getPlatformChartData = async (date: Date, day: number) => {
    const startDate = format(date, 'yyyy-MM-dd');
    const endDate = format(add(date, { days: day }), 'yyyy-MM-dd');

    try {
      const response = await apiRequest.get(
        '/platform',
        `date_gte=${startDate}&date_lte=${endDate}`,
      );
      const data = response.data;

      let chartData = data.reduce((acc: DataType, curr: DataType) => {
        const { channel } = curr;
        platformKeyNameList.forEach(name => {
          const adDataValue = curr[name];
          acc[name][channel] += adDataValue;
        });

        return acc;
      }, initialChartFormat);

      for (let name in chartData) {
        if (name === 'roas' || name === 'ctr' || name === 'cvr') {
          for (let channel in chartData[name]) {
            const avgValue =
              Math.round((chartData[name][channel] / day + 1) * 100) /
              100;
            chartData[name][channel] = avgValue;
          }
        }
      }

      let chartSumData: object[] = [];

      Object.keys(chartData).forEach(value => {
        let sum = 0;
        let sumObj: PlatformSumType = { name: value, sum: 0 };
        for (let name in chartData[value]) {
          sum += chartData[value][name];
        }
        sumObj.sum = sum;
        chartSumData.push(sumObj);
      });

      return { chartData, chartSumData };
    } catch (error) {}
  };

  const getPlatformTableData = async (date: Date, day: number) => {
    const startDate = format(date, 'yyyy-MM-dd');
    const endDate = format(add(date, { days: day }), 'yyyy-MM-dd');

    try {
      const response = await apiRequest.get(
        '/platform',
        `date_gte=${startDate}&date_lte=${endDate}`,
      );
      const data = response.data;

      let tableData = data.reduce((acc: DataType, curr: DataType) => {
        const { channel } = curr;

        platformKeyNameList.forEach(name => {
          const adDataValue = curr[name];
          acc[channel][name] += adDataValue;
        });

        return acc;
      }, initialTableFormat);

      for (let channel in tableData) {
        for (let name in tableData[channel]) {
          if (name === 'roas' || name === 'ctr' || name === 'cvr') {
            const avgValue =
              Math.round((tableData[channel][name] / day + 1) * 100) /
              100;
            tableData[channel][name] = avgValue;
          }
        }
      }

      const channelTableData = platformNameList.map(
        (platform, idx) => {
          const channel = platformChannelList[idx];
          return { name: platform, tableData: tableData[channel] };
        },
      );

      return channelTableData;
    } catch (error) {}
  };

  return {
    platformReport,
    getPlatformReport,
    getPlatformChartData,
    getPlatformTableData,
  };
};
