import { styled, MenuItem, FormControl, InputLabel } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { dynamicChartData, isMonthData } from "../../store/charts";
import { roasCpc, clickCpc, convCvr, clickCtr } from "../charts/chartCustoms/OverallChangeValueData";
import { useRecoilState, useRecoilValue } from "recoil";
import { useListedEachWeek } from "../../hooks/useListedWeeksAndMonth";
import { parseISO, format, add, endOfMonth, startOfMonth } from "date-fns";
import { startData, endData, lastData, firstData, typesData } from "../../store/global";
import { useSpinner } from "../../hooks/useSpinner";

export const TopDateDropdown = () => {
  const first = useRecoilValue(firstData)
  const last = useRecoilValue(lastData)
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)

  const [dateList, setDateList] = useState("");
  const lastDate = parseISO(last);
  const firstDate = parseISO(first);
  const { loadSpinner } = useSpinner();

  const {listedDate, listedMonth} = useListedEachWeek(firstDate, lastDate);
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);

  const handleChange = (event: SelectChangeEvent) => {
    const regex = /[^0-9]/g;

    const startDateToString = event.target.value.split('~')[0].replace(/ /g, '').replace(regex, "-").slice(0, -1);
    const endDateToString = event.target.value.split('~')[1].replace(/ /g, '') === 'undefined' ? last : event.target.value.split('~')[1].replace(/ /g, '').replace(regex, "-").slice(0, -1);

    loadSpinner();
    setDateList(event.target.value as string);
    setStart(startDateToString)
    setEnd(endDateToString)
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

export const MiddleLeftDropdowns = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const [dynamics, setDynamics] = useRecoilState(dynamicChartData);
  const [type, setType] = useRecoilState(typesData);
  const { loadSpinner } = useSpinner();


  const handleChange = (event: SelectChangeEvent) => {
    setSelect1(event.target.value as string);
    loadSpinner();
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setSelect2(event.target.value as string);
    loadSpinner();
  };

  const handleChange3 = (event: SelectChangeEvent) => {
    setType({type: event.target.value as string})
    loadSpinner();
  }

  return (
    <>
      <StyleFormControl sx={{ mr: 1 }} size="small">
        <InputLabel id="demo-select-small1">select</InputLabel>

        <Select
          labelId="demo-select-small1"
          id="demo-select-small1"
          value={select1}
          label="select"
          onChange={handleChange}
        >
          <MenuItem value={10} onClick={() => setDynamics(roasCpc)}>
            <em>수익률</em>
          </MenuItem>

          <MenuItem value={20} onClick={() => setDynamics(clickCpc)}>
            클릭단가
          </MenuItem>
        </Select>
      </StyleFormControl>
      <StyleFormControl sx={{ mr: 1 }} size="small">
        <InputLabel id="demo-select-small2">select</InputLabel>
        <Select
          labelId="demo-select-small2"
          id="demo-select-small2"
          value={select2}
          label="select"
          onChange={handleChange2}
        >
          <MenuItem value={10} onClick={() => setDynamics(convCvr)}>
            <em>전환율</em>
          </MenuItem>
          <MenuItem value={20} onClick={() => setDynamics(clickCtr)}>
            <em>클릭률</em>
          </MenuItem>
        </Select>
      </StyleFormControl>
      <StyleFormControl size="small">
        <InputLabel id="demo-select-small2"></InputLabel>
            <Select
         labelId="demo-select-small2"
         id="demo-select-small2"
          value={type.type}
          onChange={handleChange3}
          // label="select"
        >
          <MenuItem value={"Line"}>
            <em>Line</em>
          </MenuItem>
          <MenuItem value={"Dash"}>
            <em>Dash</em>
          </MenuItem>
        </Select>
        </StyleFormControl>
    </>
  );
};

export const WeekToMonthDropdown = () => {
  const [date, setDate] = useState("");
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)
  const { loadSpinner } = useSpinner();

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
    loadSpinner();
  };

  const changeToWeek = () => {
    setIsMonth(6)
    setStart(start)
    setEnd(format(add(parseISO(start), {days:6}), "yyyy-MM-dd"))
  }

  const changeToMonth = () => {
    setIsMonth(30)
    setStart(format(startOfMonth(parseISO(start)),"yyyy-MM-dd"))
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
