import { styled, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { dynamicChartData, isMonthData } from "../../store/charts";
import { f, ff, fff, ffff } from "../charts/chartCustoms/ChangeValueData";
import { useRecoilState } from "recoil";
import { useListedEachWeek } from "../../hooks/useListedWeeksAndMonth";
import { parseISO, format, add, isSunday, nextSunday, nextSaturday, endOfMonth } from "date-fns";
// import ChannelReport from "../../data/channel-report.json";
// import DailyReport from "../../data/daily-report.json";
// import {useOverallModel} from "../../api/models/useOverallModel"
import { startData, endData, lastData, firstData } from "../../store/global";


export const OverallDateDropdown = () => {
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)
  const [last, setLast] = useRecoilState(lastData)
  const [first, setFirst] = useRecoilState(firstData)
  const [dateList, setDateList] = useState("");
  const [currentDate, setCurrentDate] = useState("")
  const lastDate = parseISO(last);
  const startDate = parseISO(start);
  const firstDate = parseISO(first);
  const endDate = parseISO(end);

  // console.log(date.startDate, date.endDate);
  console.log(currentDate)
  const {listedDate, listedMonth} = useListedEachWeek(firstDate, lastDate);
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const handleChange = (event: SelectChangeEvent) => {
  const regex = /[^0-9]/g;
    setDateList(event.target.value as string);
    setStart(event.target.value.split('~')[0].replace(/ /g, '').replace(regex, "-").slice(0, -1))
    setEnd(event.target.value.split('~')[1].replace(/ /g, '') === 'undefined' ? last : event.target.value.split('~')[1].replace(/ /g, '').replace(regex, "-").slice(0, -1))
    console.log(event.target.value.split('~')[1].replace(/ /g, '') === 'undefined')
  };

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 240, height: 60 }}>
        <InputLabel id="demo-simple-select-standard-label">기간</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dateList}
          onChange={handleChange}
          label="Date"
        >
          
          {isMonth === 30 ? listedMonth : listedDate}
          
        </Select>
      </FormControl>
    </>
  );
};

export const OverallMiddleDropdown = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [dynamics, setDynamics] = useRecoilState(dynamicChartData);

  const handleChange = (event: SelectChangeEvent) => {
    setSelect1(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setSelect2(event.target.value as string);
  };

  return (
    <>
      <StyleFormControl sx={{ mr: 1 }} size="small">
        <InputLabel id="demo-select-small1">select</InputLabel>
        <InputLabel id="demo-select-small1">select</InputLabel>
        <Select
          labelId="demo-select-small1"
          id="demo-select-small1"
          value={select1}
          label="select"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={() => setDynamics(f)}>
            <em>ROAS</em>
          </MenuItem>

          <MenuItem value={20} onClick={() => setDynamics(ff)}>
            CLICK
          </MenuItem>
        </Select>
      </StyleFormControl>
      <StyleFormControl size="small">
        <InputLabel id="demo-select-small2">select</InputLabel>
        <Select
          labelId="demo-select-small2"
          id="demo-select-small2"
          value={select2}
          label="select"
          onChange={handleChange2}
        >
          <MenuItem value={10} onClick={() => setDynamics(fff)}>
            <em>ROAS</em>
          </MenuItem>
          <MenuItem value={20} onClick={() => setDynamics(ffff)}>
            <em>클릭 수</em>
          </MenuItem>
        </Select>
      </StyleFormControl>
    </>
  );
};

export const OverallMonthDropdown = () => {
  const [date, setDate] = useState("");
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)
  const [last, setLast] = useRecoilState(lastData)
  const [first, setFirst] = useRecoilState(firstData)
  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };

  const changeToWeek = () => {
    setIsMonth(6)
    setStart(start)
    setEnd(format(add(parseISO(start), {days:6}), "yyyy-MM-dd"))
  }

  const changeToMonth = () => {
    setIsMonth(30)
    setStart(start)
    setEnd(format(endOfMonth(parseISO(start)), "yyyy-MM-dd"))
  }

  
  return (
    <>
      <StyleFormControl size="small">
        <InputLabel id="demo-select-small1">기간</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={date}
          label="기간"
          onChange={handleChange}
        >
          <MenuItem value={1} onClick={() => changeToWeek()}>
            <em>주간</em>
          </MenuItem>
          <MenuItem value={2} onClick={() => changeToMonth()}>
            <em>월간</em>
          </MenuItem>
        </Select>
      </StyleFormControl>
    </>
  );
};

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  width: 120,
  [theme.breakpoints.down("md")]: {
    width: 100,
  },
}));
