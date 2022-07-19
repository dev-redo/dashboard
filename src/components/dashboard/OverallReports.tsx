import {
  Box,
  styled,
  Card,
  Typography,
  CardContent,
  FormControl,
  InputLabel,
  Grid,
  MenuItem
} from "@mui/material";
import OverallChart from "../charts/OverallChart";
import RainFallAreaChart from "../charts/RainFallAreaChart";
import {
  OverallDateDropdown,
  OverallMiddleDropdown,
  OverallMonthDropdown,
} from "./OverallDropdowns";
import {useState } from 'react';
import Select, { SelectChangeEvent } from "@mui/material/Select";

const OverallReports = () => {
  const [type, setType] = useState({type:"Line"})
console.log(type)
 const handleChange = (event: SelectChangeEvent) => {
    setType({type: event.target.value as string})
  }

  const fetchChart = () => {
    switch(type.type){
      case "Line": return <OverallChart/>
      case "Area": return <RainFallAreaChart />
      default: return <OverallChart/>
    }
  }
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
        <OverallDateDropdown />
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
            <OverallMiddleDropdown />
            <StyleFormControl size="small">
        <InputLabel id="demo-select-small2">select</InputLabel>
            <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type.type}
          onChange={handleChange}
          label="Date"
        >
          <MenuItem value={"Line"}>
            <em>Line</em>
          </MenuItem>
          <MenuItem value={"Area"}>
            <em>Area</em>
          </MenuItem>
        </Select>
        </StyleFormControl>
          </Box>
          
          <OverallMonthDropdown />
          

        </Box>

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

const StyledCard = styled(Card)({
  border: "1px solid #dedede",
  boxShadow: "none",
});
const StyleFormControl = styled(FormControl)(({ theme }) => ({
  width: 120,
  [theme.breakpoints.down("md")]: {
    width: 100,
  },
}));