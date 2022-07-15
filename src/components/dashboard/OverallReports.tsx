import React, { useState } from "react";
import {
  Box,
  styled,
  Card,
  Typography,
  CardContent,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DailyReportChart from "../charts/DailyReportChart";
import { useRecoilState } from "recoil";
import {chartFirstData, chartSecondData} from "../../store/charts";
const OverallReports = () => {
  const [select, setSelect] = useState("");
  const [firstdata, setFirstData] = useRecoilState(chartFirstData)
  const [secondData, setSecondData] = useRecoilState(chartSecondData)
  console.log(firstdata, secondData)
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <StyledItem>
      {/* ad infomation */}
      <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5 }}>
        {/* 임의로 반복문 돌려줌 */}
        {["ROAS", "광고비", "노출 수", "클릭 수", "전환 수", "매출"].map(
          (text, index) => (
            <StyledCard key={"card" + index}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {text}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: 18 }} color="#222">
                    66%
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    1.1만회
                  </Typography>
                </Box>
              </CardContent>
            </StyledCard>
          )
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box>
          <FormControl sx={{ minWidth: 120, mr: 2 }} size="small">
            <InputLabel id="demo-select-small1">select</InputLabel>
            <Select
              labelId="demo-select-small1"
              id="demo-select-small1"
              value=""
              label="select"
              onChange={handleChange}
            >
              <MenuItem value="ROAS" onClick={() => setFirstData("ROAS")}>
                <em>ROAS</em>
              </MenuItem>

              <MenuItem value="ROAS" onClick={() => setFirstData("CLICK")}>CLICK</MenuItem>

            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small2">select</InputLabel>
            <Select
              labelId="demo-select-small2"
              id="demo-select-small2"
              value=""
              label="select"
              onChange={handleChange}
            >
              <MenuItem value="ROAS" onClick={() => setSecondData("ROAS")}>
                <em>ROAS</em>
              </MenuItem>
               <MenuItem value="ROAS" onClick={() => setSecondData("CLICK")}>
                <em>클릭 수</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value=""
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
  {/* 차트 */}
      <Box sx={{ background: "#ffd6d1", height: 400 }}>
        Line Chart
        <DailyReportChart />
      </Box>
    </StyledItem>
  );
};

export default OverallReports;

const StyledItem = styled(Box)({
  paddingBlock: 30,
  paddingInline: 35,
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
});

const StyledCard = styled(Card)({
  width: "32%",
  marginTop: "2%",
  marginRight: "2%",
  border: "1px solid #dedede",
  boxShadow: "none",
  "&:nth-of-type(3n)": {
    marginRight: 0,
  },
  "&:nth-of-type(-n+3)": {
    marginTop: 0,
  },
});
