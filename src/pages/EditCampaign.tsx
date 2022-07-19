import Layout from '../components/layout/Layout';
import CampaignForm from '../components/campaign/CampaignForm';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Box, styled, Input, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EditCampaign = (match: object) => {
  const location = useLocation();
  const compaignById: any = location.state;
  console.log(compaignById);

  // const [previousTitle, setPreviousTitle] = React.useState(
  //   compaignById.title,
  // );
  // const [previousStatus, setStatus] = React.useState(
  //   compaignById.status,
  // );
  // const [previousDate, setDate] = React.useState(
  //   compaignById.startDate,
  // );
  // const [previousBudget, setBudget] = React.useState(
  //   compaignById.budget,
  // );
  // const [previousRoas, setRoas] = React.useState(
  //   compaignById.report.roas,
  // );
  // const [previousConvValue, setConvValue] = React.useState(
  //   compaignById.report.convValue,
  // );
  // const [previousCost, setCost] = React.useState(
  //   compaignById.report.cost,
  // );

  // const titleRef = useRef<HTMLInputElement | any>(null);
  // const statusRef = useRef<HTMLDivElement | any>(null);
  // const dateRef = useRef<HTMLDivElement | any>(null);
  // const budgetRef = useRef<HTMLDivElement | any>(null);
  // const roasRef = useRef<HTMLDivElement | any>(null);
  // const convValueRef = useRef<HTMLDivElement | any>(null);
  // const costRef = useRef<HTMLDivElement | any>(null);

  const [inputs, setInputs] = useState({
    title: compaignById.title,
    status: compaignById.status,
    date: compaignById.startDate,
    budget: compaignById.budget,
    roas: compaignById.report.roas,
    convValue: compaignById.report.convValue,
    cost: compaignById.report.cost,
  });
  const { title, status, date, budget, roas, convValue, cost } =
    inputs;
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, name } = event.target;
    console.log(value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const ariaLabel = { 'aria-label': 'description' };
  const navigate = useNavigate();

  return (
    <Layout>
      {/* <CampaignForm type="수정하기" campaignDataById={location.state} /> */}
      <Box sx={{ flexGrow: 1 }}>
        <Title>광고 수정하기</Title>
        <AddForm>
          <InputBox>
            <TextField
              id="standard-multiline-flexible"
              label="제목"
              multiline
              value={title}
              // ref={titleRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="상태"
              multiline
              value={status}
              // ref={statusRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 생성일"
              multiline
              value={date}
              // ref={dateRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="일 희망 예산"
              multiline
              value={budget}
              // ref={budgetRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 수익률"
              multiline
              value={roas}
              // ref={roasRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="매출"
              multiline
              value={convValue}
              // ref={convValueRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 비용"
              multiline
              value={cost}
              // ref={costRef}
              onChange={handleChange}
              variant="standard"
            />
          </InputBox>
        </AddForm>
        <ButtonBox>
          <Button
            variant="contained"
            style={{
              borderRadius: 12,
              backgroundColor: '#727272',
              padding: '0 1.5rem',
            }}
            onClick={() => navigate('/campaign-manage')}
          >
            목록으로
          </Button>
          <Button
            variant="contained"
            style={{
              borderRadius: 12,
              backgroundColor: '#586CF5',
              padding: '0 1.5rem',
            }}
          >
            수정하기
          </Button>
        </ButtonBox>
      </Box>
    </Layout>
  );
};

export default EditCampaign;
const Title = styled('header')({
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '1.5rem',
  color: '#4e4e4e',
  margin: '1rem 0',
});
const AddForm = styled('div')({
  backgroundColor: 'pink',
  width: '30rem',
  height: '36rem',
  background: '#ffffff',
  boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '3rem',
  margin: '0 auto',
  position: 'relative',
});
const ButtonBox = styled('div')({
  width: '30rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  marginTop: '2rem',
});
const InputBox = styled('div')({
  width: '25rem',
  height: '37rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  color: '#acacac',
  padding: '6rem 2rem',
  boxSizing: 'border-box',
  margin: '0 auto',
});
