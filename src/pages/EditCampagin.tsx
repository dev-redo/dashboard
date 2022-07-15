import Layout from "../components/layout/Layout";
import CampaginForm from "../components/campagin/CampaginForm";
import { Box, styled } from "@mui/material";

const EditCampagin = () => {
  return (
    <Layout>
      <StyledContents>
        <CampaginForm type="수정하기" />
      </StyledContents>
    </Layout>
  );
};

export default EditCampagin;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
