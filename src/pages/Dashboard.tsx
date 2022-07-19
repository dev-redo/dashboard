import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import OverallReports from "../components/dashboard/OverallReports";
import PlatformReports from "../components/dashboard/PlatformReports";
import { useOverallModel } from "../api/models/useOverallModel";
import React from "react";
import { useRecoilState } from "recoil";
import { startData, endData, lastData } from "../store/global";

const Dashboard = () => {
  const { reports, getReports, getWeeklyReport } = useOverallModel();
  const [start, setStart] = useRecoilState(startData);
  const [end, setEnd] = useRecoilState(endData)
  const [last, setLast] = useRecoilState(lastData)
  // console.log(date.startDate)
  // React.useEffect(() => {
  //   getWeeklyReport(date.startDate, date.endDate);
  // }, []);

  // console.log('reports: ', reports);
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
