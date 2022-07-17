import {parseISO, eachWeekendOfInterval, format } from 'date-fns'
// import ChannelReport from "../data/channel-report.json";
import {
    MenuItem,
  } from "@mui/material";

export const useListedEachWeek = (startDate:Date, endDate:Date) => {
    // const startDate = parseISO(ChannelReport[1].date)
    // const lastDate = parseISO(ChannelReport[ChannelReport.length -1].date)
    const result = eachWeekendOfInterval({
      start: startDate,
      end: endDate
    })

    const dateRange = result.map((x) => 
    (format(x, "yyyy년 MM월 dd일")));
  
    const OddRange = dateRange.filter((x:string, index) => 
        (index % 2 === 1 ? x : ""));
  
    const EvenRange = dateRange.filter((x:string, index) => 
      (index !== 0 && index % 2 === 0 ? x : ""));
  
    // console.log(dateRange)
    // console.log(OddRange, EvenRange)

    const listedDate = OddRange.map((x, index) => 
        (<MenuItem value={index} key={x}>
        <em>{x} ~ {EvenRange[index] ? EvenRange[index] : "현재"}</em>
      </MenuItem>))
      
    return listedDate;
}