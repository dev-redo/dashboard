import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import OverallReports from "../components/dashboard/OverallReports";
import PlatformReports from "../components/dashboard/PlatformReports";

const Dashboard = () => {
  return (
    <Layout>
      <StyledContents>
        <OverallReports />

        <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
          매체 현황
        </Typography>
        <PlatformReports />
      </StyledContents>
    </Layout>
  );
};

export default Dashboard;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
