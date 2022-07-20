import Layout from '../components/layout/Layout';
import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { apiRequest } from '../api/instance/instance';
import {
  Box,
  styled,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EditCampaign = (match: object) => {
  const location = useLocation();
  const campaignById: any = location.state;
  console.log(campaignById);

  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement | any>(null);
  const startDateRef = useRef<HTMLDivElement | any>(null);
  const endDateRef = useRef<HTMLDivElement | any>(null);
  const budgetRef = useRef<HTMLDivElement | any>(null);
  const roasRef = useRef<HTMLDivElement | any>(null);
  const convValueRef = useRef<HTMLDivElement | any>(null);
  const costRef = useRef<HTMLDivElement | any>(null);

  const [inputs, setInputs] = useState({
    title: campaignById.title,
    type: campaignById.adType,
    status: campaignById.status,
    startDate: campaignById.startDate,
    endDate: campaignById.endDate,
    budget: campaignById.budget,
    roas: campaignById.report.roas,
    convValue: campaignById.report.convValue,
    cost: campaignById.report.cost,
  });
  const {
    title,
    type,
    status,
    startDate,
    endDate,
    budget,
    roas,
    convValue,
    cost,
  } = inputs;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [postedType, setPostedType] = React.useState('');
  const [postedStatus, setPostedStatus] = React.useState('');

  const handleCampaignType = (event: any) => {
    setPostedType(event.target.value);
  };
  const handleCampaignStatus = (event: any) => {
    setPostedStatus(event.target.value);
  };

  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any): any => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  const patchCampaign = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const newCampaign: any = {
      adType: postedType,
      title: titleRef,
      budget: budgetRef,
      status: postedStatus,
      startDate: startDateRef + 'T00:00:00',
      endDate: endDateRef + 'T23:59:59',
      report: {
        cost: costRef,
        convValue: convValueRef,
        roas: roasRef,
      },
    };
    fetch(`http://localhost:8000/campaign/${campaignById.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCampaign, getCircularReplacer()),
    }).then(() => {
      console.log('Edit');
    });
  };
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Title>광고 수정하기</Title>
        <AddForm>
          <InputBox>
            <TextField
              id="standard-multiline-flexible"
              label="제목"
              multiline
              defaultValue={title}
              ref={titleRef}
              onChange={handleChange}
              variant="standard"
            />
            <FormControl
              sx={{ minWidth: 120, marginTop: 2 }}
              size="small"
            >
              <Select
                defaultValue={type}
                onChange={handleCampaignType}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>광고 타입</em>
                </MenuItem>
                <MenuItem value={'web'}>web</MenuItem>
                <MenuItem value={'app'}>app</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-multiline-flexible"
              label="일 희망 예산"
              multiline
              ref={budgetRef}
              defaultValue={budget}
              onChange={handleChange}
              variant="standard"
            />
            <FormControl
              sx={{ minWidth: 120, marginTop: 2 }}
              size="small"
            >
              <Select
                defaultValue={status}
                onChange={handleCampaignStatus}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>광고 상태</em>
                </MenuItem>
                <MenuItem value={'active'}>active</MenuItem>
                <MenuItem value={'ended'}>ended</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="standard-multiline-flexible"
              label="광고 생성일"
              multiline
              ref={startDateRef}
              defaultValue={startDate}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 마감일"
              multiline
              ref={endDateRef}
              defaultValue={endDate}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 비용"
              multiline
              ref={costRef}
              defaultValue={cost}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="매출"
              multiline
              ref={convValueRef}
              defaultValue={convValue}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="광고 수익률"
              multiline
              ref={roasRef}
              defaultValue={roas}
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
            onClick={patchCampaign}
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
  padding: '4rem 2rem',
  boxSizing: 'border-box',
  margin: '0 auto',
});
