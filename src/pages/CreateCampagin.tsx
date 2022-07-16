import Layout from "../components/layout/Layout";
import { Box, styled } from "@mui/material";
import CampaginForm from "../components/campagin/CampaginForm";

const CreateCampagin = () => {
  return (
    <Layout>
        <CampaginForm />
    </Layout>
  );
};

export default CreateCampagin;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
