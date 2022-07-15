import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import DashBoardAd from "../components/dashboard/DashBoardAd";
import DashboardMedia from "../components/dashboard/DashBoardMedia";

const Dashboard = () => {
  return (
    <Layout>
      <StyledContents>
        <Typography variant="h6" sx={{ mb: 2 }}>
          통합 광고 현황
        </Typography>
        <DashBoardAd />

        <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
          매체 현황
        </Typography>
        <DashboardMedia />
      </StyledContents>
    </Layout>
  );
};

export default Dashboard;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
