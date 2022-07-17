import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import OverallReports from "../components/dashboard/OverallReports";
import PlatformReports from "../components/dashboard/PlatformReports";

const Dashboard = () => {
  return (
    <Layout>
      <OverallReports />

      <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
        매체 현황
      </Typography>
      <PlatformReports />
    </Layout>
  );
};

export default Dashboard;
