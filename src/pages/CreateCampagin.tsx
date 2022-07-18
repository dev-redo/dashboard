import Layout from '../components/layout/Layout';
import { Box, styled } from '@mui/material';
import campaignForm from '../components/campaign/campaignForm';

const Createcampaign = () => {
  return (
    <Layout>
      <campaignForm />
    </Layout>
  );
};

export default Createcampaign;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
