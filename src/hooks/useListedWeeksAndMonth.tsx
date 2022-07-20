import {parseISO, eachWeekendOfInterval, format, endOfMonth, eachMonthOfInterval, add, isSunday, nextSaturday, previousSunday, eachWeekOfInterval } from 'date-fns'

import { MenuItem } from "@mui/material";
import { isMonthData } from "../store/charts";
import { useRecoilState } from "recoil";
  
export const useListedEachWeek = (startDate:Date, endDate:Date, lastDate:Date = parseISO("2022-04-20")) => {
  const [isMonth, setIsMonth] = useRecoilState(isMonthData);
  const Week:string[] = []
  const Month:string[] = []

    const result = eachWeekendOfInterval({
      start: startDate,
      end: endDate
    })

    const weekResult = eachWeekOfInterval({
      start: startDate,
      end: endDate,
    }, {weekStartsOn : 2})

    const monthResult = eachMonthOfInterval({
      start: startDate,
      end: endDate
    })

    weekResult.forEach((x) => 
    {
      Week.push(format(x, "yyyy년 MM월 dd일"))
      Week.push(format(add(x, {days:6}), "yyyy년 MM월 dd일"))
      return Week;
  });

    const dateRange = result.map((x) => 
    (format(x, "yyyy년 MM월 dd일")));
  
    const OddRange = dateRange.filter((x:string, index) => 
        (index % 2 === 1 ? x : ""));
  
    const EvenRange = dateRange.filter((x:string, index) => 
      (index !== 0 && index % 2 === 0 ? x : ""));
  
  
    monthResult.map((x, index) => {
      Month.push(format(x, "yyyy년 MM월 dd일"));
        monthResult.length -1 === index && format(lastDate, "dd") < format(endOfMonth(x), "dd") ? Month.push(format(lastDate, "yyyy년 MM월 dd일")) : Month.push(format(endOfMonth(x), "yyyy년 MM월 dd일"))
        return Month;
      }
    );

    const MonthOddRange = Month.filter((x:string, index) => 
    (index % 2 === 0 ? x : ""));

    const MonthEvenRange = Month.filter((x:string, index) => 
  (index % 2 === 1 ? x : ""));


    const listedDate = OddRange.map((x, index) => 
        (isMonth === 6 && !isSunday(startDate) && index === 0 ? (
        [
        <MenuItem value={`${format(previousSunday(startDate), "yyyy년 MM월 dd일")} ~ ${format(nextSaturday(startDate), "yyyy년 MM월 dd일")}`} key={"firstKey"}> <em>
        {format(previousSunday(startDate), "yyyy년 MM월 dd일")} ~ {format(nextSaturday(startDate), "yyyy년 MM월 dd일")}
      </em> </MenuItem>,
      <MenuItem value={`${x} ~ ${EvenRange[index]}`} key={x}>
      <em>{x} ~ {EvenRange[index] ? EvenRange[index] : "현재"}</em>
    </MenuItem>
        ]
      ) : <MenuItem value={`${x} ~ ${EvenRange[index]}`} key={x}>
        <em>{x} ~ {EvenRange[index] ? EvenRange[index] : "현재"}</em>
      </MenuItem>))

    const listedMonth = MonthOddRange.map((x, index) => 
    (<MenuItem value={`${x} ~ ${MonthEvenRange[index]}`} key={x}>
      <em>{x} ~ {MonthEvenRange[index] ? MonthEvenRange[index] : "현재"}</em>
    </MenuItem>))

    return {listedDate, listedMonth};
}