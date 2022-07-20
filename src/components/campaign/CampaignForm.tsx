import React, { useEffect, useRef } from 'react';
import { Box, styled, Input, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TypeProps {
  type: string;
  campaignDataById: number;
}

const CampaignForm = ({ type, campaignDataById }: any) => {
  const [previousTitle, setPreviousTitle] = React.useState('');
  const [previousStatus, setStatus] = React.useState('');
  const [previousDate, setDate] = React.useState('');
  const [previousBudget, setBudget] = React.useState('');
  const [previousRoas, setRoas] = React.useState('');
  const [previousConvValue, setConvValue] = React.useState('');
  const [previousCost, setCost] = React.useState('');

  const titleRef = useRef<HTMLInputElement | any>(null);
  const statusRef = useRef<HTMLDivElement | any>(null);
  const dateRef = useRef<HTMLDivElement | any>(null);
  const budgetRef = useRef<HTMLDivElement | any>(null);
  const roasRef = useRef<HTMLDivElement | any>(null);
  const convValueRef = useRef<HTMLDivElement | any>(null);
  const costRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if (campaignDataById === null) {
      // console.log('만들기페이지 버그 수정');
      setPreviousTitle(titleRef.current.value);
      setStatus(statusRef.current.value);
      setDate(dateRef.current.value);
      setBudget(budgetRef.current.value);
      setRoas(roasRef.current.value);
      setConvValue(convValueRef.current.value);
      setCost(costRef.current.value);
    } else {
      setPreviousTitle(`${campaignDataById.title}`);
      setStatus(`${campaignDataById.status}`);
      setDate(`${campaignDataById.startDate}}`);
      setBudget(`${campaignDataById.budget}`);
      setRoas(`${campaignDataById.report.roas}`);
      setConvValue(`${campaignDataById.report.convValue}`);
      setCost(`${campaignDataById.cost}`);
    }
  });
  const handleChange = (event: any): any => {
    // console.log(event.target.value);
    setPreviousTitle(event.target.value);
  };
  const ariaLabel = { 'aria-label': 'description' };
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
              value={previousTitle}
              ref={titleRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="상태"
              multiline
              value={previousStatus}
              ref={statusRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 생성일"
              multiline
              value={previousDate}
              ref={dateRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="일 희망 예산"
              multiline
              value={previousBudget}
              ref={budgetRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 수익률"
              multiline
              value={previousRoas}
              ref={roasRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="매출"
              multiline
              value={previousConvValue}
              ref={convValueRef}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 비용"
              multiline
              value={previousCost}
              ref={costRef}
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
            {`${type}`}
          </Button>
        </ButtonBox>
      </Box>
    </>
  );
};

export default CampaignForm;

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
