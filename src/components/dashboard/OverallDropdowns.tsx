import { styled, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { dynamicChartData, isMonthData, dateData } from "../../store/charts";
import { f, ff, fff, ffff } from "../charts/chartCustoms/ChangeValueData";
import { useRecoilState } from "recoil";
import { useListedEachWeek } from "../../hooks/useListedEachWeek";
import { parseISO } from "date-fns";
import ChannelReport from "../../data/channel-report.json";

export const OverallDateDropdown = () => {
  const [dateList, setDateList] = useRecoilState(dateData);
  const endDate = parseISO(ChannelReport[ChannelReport.length - 1].date);
  const startDate = parseISO(ChannelReport[1].date);
  const listedDate = useListedEachWeek(startDate, endDate);

  const handleChange = (event: SelectChangeEvent) => {
    setDateList(event.target.value as string);
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
          {listedDate}
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
  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };
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
          <MenuItem value={1} onClick={() => setIsMonth(6)}>
            <em>주간</em>
          </MenuItem>
          <MenuItem value={2} onClick={() => setIsMonth(30)}>
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
