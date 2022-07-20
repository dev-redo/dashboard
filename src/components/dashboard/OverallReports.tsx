import {
  Box,
  styled,
  Card,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";
import OverallChart from "../charts/OverallChart";
import OverallDashChart from "../charts/OverallDashChart";
import {
  TopDateDropdown,
  MiddleLeftDropdowns,
  WeekToMonthDropdown,
} from "./OverallDropdowns";
import { typesData } from "../../store/global";
import { useRecoilState } from "recoil";

const OverallReports = () => {
  const [type, setType] = useRecoilState(typesData)
  const fetchChart = () => {
    switch(type.type){
      case "Line": return <OverallChart/>
      case "Dash": return <OverallDashChart />
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
        <TopDateDropdown />
      </Box>
      <StyledItem maxWidth="xl">

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
            <MiddleLeftDropdowns />
          </Box>
          <WeekToMonthDropdown />
        </Box>
        {fetchChart()}
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
