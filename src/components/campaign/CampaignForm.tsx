import React from "react";
import { Box, styled, Input, Button,TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import {useRecoilState} from 'recoil'
// import { campaignRequestType } from "../../store/campaign";

interface TypeProps {
  type: string;
  campaignDataById:number;
}

const CampaignForm = ({ type,campaignDataById }: any) => {
  console.log(campaignDataById);
  const {id,adType,title,budget,status,startDate,endDate,report} = campaignDataById;
  // const [title, setTitle] = React.useState(`${campaignDataById.title}`);
  // const [status, setStatus] = React.useState(`${campaignDataById.status}`);
  // const [date, setDate] = React.useState(`${campaignDataById.startDate.substr(0, 10)}`);
  // const [budget, setBudget] = React.useState(`${campaignDataById.budget.toLocaleString()}`);
  // const [roas, setRoas] = React.useState(`${campaignDataById.report.roas}`);
  // const [convValue, setConvValue] = React.useState(`${campaignDataById.report.convValue.toLocaleString()}`);
  // const [cost, setCost] = React.useState(`${campaignDataById.report.cost.toLocaleString()}`);

  const handleChange=()=>{
    console.log('test');
  }
  const ariaLabel = { "aria-label": "description" };
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Title>광고 {`${type}`}</Title>
        <AddForm>
          <InputBox>
            <TextField
              id="standard-multiline-flexible"
              label="제목"
              multiline
              value={title}
              onChange={handleChange}
              variant="standard"
            />
            <Input placeholder="상태" inputProps={ariaLabel} value={status}/>
            <Input placeholder="광고 생성일" inputProps={ariaLabel} value={startDate}/>
            <Input placeholder="일 희망 예산" inputProps={ariaLabel} value={budget} />
            <Input placeholder="광고 수익률" inputProps={ariaLabel} value={report.roas}/>
            <Input placeholder="매출" inputProps={ariaLabel} value={report.convValue}/>
            <Input placeholder="광고 비용" inputProps={ariaLabel} value={report.cost}/>
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
            onClick={() => navigate("/campaign-manage")}
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
            {`${type}`}
          </Button>
        </ButtonBox>
      </Box>
    </>
  );
};

export default CampaignForm;

const Title = styled("header")({
  textAlign: "center",
  fontWeight: "700",
  fontSize: "1.5rem",
  color: "#4e4e4e",
  margin: "1rem 0",
});
const AddForm = styled("div")({
  backgroundColor: "pink",
  width: "30rem",
  height: "36rem",
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
  marginTop: "2rem",
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
