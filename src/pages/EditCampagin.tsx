import Layout from "../components/layout/Layout";
import CampaginForm from "../components/campagin/CampaginForm";
import { Box, styled } from "@mui/material";

const EditCampagin = () => {
  return (
    <Layout>
        <CampaginForm />
    </Layout>
  );
};

export default EditCampagin;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
