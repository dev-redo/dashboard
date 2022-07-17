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
  Container,
  Grid,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DailyReportChart from "../charts/DailyReportChart";
import { useRecoilState } from "recoil";
import { chartFirstData, chartSecondData } from "../../store/charts";

const OverallReports = () => {
  const [select, setSelect] = useState("");
  const [firstdata, setFirstData] = useRecoilState(chartFirstData);
  const [secondData, setSecondData] = useRecoilState(chartSecondData);

  console.log(firstdata, secondData);

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography variant="h6">통합 광고 현황</Typography>
        <FormControl variant="standard" sx={{ minWidth: 240, height: 60 }}>
          <InputLabel id="demo-simple-select-standard-label">기간</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value=""
            onChange={handleChange}
            label="Date"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="week">
              2022년 11월 11일 ~ 2022년 11월 16일
            </MenuItem>
            <MenuItem value="month">
              2022년 11월 11일 ~ 2022년 11월 16일
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <StyledItem maxWidth="xl">
        {/* ad infomation */}
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {/* 임의로 반복문 돌려줌 */}
          {["ROAS", "광고비", "노출 수", "클릭 수", "전환 수", "매출"].map(
            (text, index) => (
              <Grid key={"card" + index} item xs={12} sm={6} md={4}>
                <StyledCard>
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
              </Grid>
            )
          )}
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box>
            <StyleFormControl sx={{ mr: 1 }} size="small">
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

                <MenuItem value="ROAS" onClick={() => setFirstData("CLICK")}>
                  CLICK
                </MenuItem>
              </Select>
            </StyleFormControl>
            <StyleFormControl size="small">
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
            </StyleFormControl>
          </Box>
          <StyleFormControl size="small">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value=""
              onChange={handleChange}
              label="Date"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="week">주간</MenuItem>
              <MenuItem value="month">월간</MenuItem>
            </Select>
          </StyleFormControl>
        </Box>
        {/* 차트 */}
        <DailyReportChart />
      </StyledItem>
    </>
  );
};

export default OverallReports;

const StyledItem = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingBlock: 30,
    paddingInline: 35,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
    paddingInline: 16,
  },
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
}));

const StyleFormControl = styled(FormControl)(({ theme }) => ({
  width: 120,
  [theme.breakpoints.down("md")]: {
    width: 100,
  },
}));

const StyledCard = styled(Card)({
  border: "1px solid #dedede",
  boxShadow: "none",
});
