import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import ManageList from "../components/campaign/ManageList";

const ManageCampaigns = () => {
  return (
    <Layout>
      <Typography variant="h6" sx={{ mb: 2 }}>
        광고관리
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <ManageList />
      </Box>
    </Layout>
  );
};

export default ManageCampaigns;


