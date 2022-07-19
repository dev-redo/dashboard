import { PlatformItems } from './../../types/platform.d';
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
import { access } from 'fs';

interface DataType {
  [x: string]: any;
  channel?: any;
}

const BASE_URL = 'http://localhost:8000';

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
      const response = await axios.get(
        `${BASE_URL}/platform?date_gte=${startDate}&date_lte=${endDate}`,
      );
      const data = response.data;
      return data;
    } catch (error) {}
  };

  const getPlatformTableData = async (date: Date, day: number) => {
    const startDate = format(date, 'yyyy-MM-dd');
    const endDate = format(add(date, { days: day }), 'yyyy-MM-dd');

    try {
      // const response = await apiRequest.get(
      //   '/platform',
      //   `date_gte=${startDate}&date_lte=${endDate}`,
      // );

      const response = await axios.get(
        `${BASE_URL}/platform?date_gte=${startDate}&date_lte=${endDate}`,
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

      let tableArr: object[] = [];
      channelTableData.map(channels => {
        tableArr.push(channels.tableData);
      });

      const tableSumData = platformKeyNameList.map(name => {
        const value = tableArr.reduce(
          (acc: number, curr: object | any) => {
            return acc + curr[name];
          },
          0,
        );
        return { name: name, sum: value };
      });

      return { channelTableData, tableSumData };
    } catch (error) {}
  };

  return {
    platformReport,
    getPlatformReport,
    getPlatformChartData,
    getPlatformTableData,
  };
};
