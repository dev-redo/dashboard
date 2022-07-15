import Layout from "../components/layout/Layout";
import { Box, styled, Typography, Input, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdModify = () => {
  const ariaLabel = { "aria-label": "description" };
  const navigate = useNavigate();
  return (
    <Layout>
      <StyledContents>
        <Typography variant="h6" sx={{ mb: 2 }}>
          광고관리
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Title>광고 수정하기</Title>
          <AddForm>
            <InputBox>
              <Input
                placeholder="타이틀"
                inputProps={ariaLabel}
                autoFocus={true}
              />
              <Input placeholder="상태" inputProps={ariaLabel} />
              <Input placeholder="광고 생성일" inputProps={ariaLabel} />
              <Input placeholder="일 희망 예산" inputProps={ariaLabel} />
              <Input placeholder="광고 수익률" inputProps={ariaLabel} />
              <Input placeholder="매출" inputProps={ariaLabel} />
              <Input placeholder="광고 비용" inputProps={ariaLabel} />
            </InputBox>
          </AddForm>
          <ButtonBox>
            <Button
              variant="contained"
              style={{
                borderRadius: 12,
                backgroundColor: "#727272",
                padding: "0 1.5rem",
              }}
              onClick={() => navigate("/ad")}
            >
              목록으로
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: 12,
                backgroundColor: "#586CF5",
                padding: "0 1.5rem",
              }}
            >
              수정하기
            </Button>
          </ButtonBox>
        </Box>
      </StyledContents>
    </Layout>
  );
};

export default AdModify;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});
const Title = styled("header")({
  textAlign: "center",
  fontWeight: "700",
  fontSize: "1.5rem",
  color: "#4e4e4e",
  margin: "3rem 0",
});
const AddForm = styled("div")({
  backgroundColor: "pink",
  width: "31rem",
  height: "37rem",
  background: "#ffffff",
  boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.25)",
  borderRadius: "3rem",
  margin: "0 auto",
  position: "relative",
});
const ButtonBox = styled("div")({
  width: "30rem",
  height: "2.5rem",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  marginTop: "5rem",
});
const InputBox = styled("div")({
  width: "25rem",
  height: "37rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#acacac",
  padding: "6rem 2rem",
  boxSizing: "border-box",
  margin: "0 auto",
});
