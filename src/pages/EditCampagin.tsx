import Layout from '../components/layout/Layout';
import campaignForm from '../components/campaign/campaignForm';
import { Box, styled } from '@mui/material';

const Editcampaign = () => {
  return (
    <Layout>
      <campaignForm />
    </Layout>
  );
};

export default Editcampaign;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
