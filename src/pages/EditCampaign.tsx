import Layout from "../components/layout/Layout";
import CampaignForm from "../components/campaign/CampaignForm";
import { useLocation } from 'react-router-dom';

const EditCampaign = (match:object) => {
  const location=useLocation();
  console.log('state',location.state);

  return (
    <Layout>
      <CampaignForm type="수정하기" campaignDataById={location.state} />
    </Layout>
  );
};

export default EditCampaign;
