import { useEffect, useState } from 'react';
import {
  Box,
  styled,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import StackedBarChart from '../charts/PlatformChart';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  dateState,
  filteredPlatformDate,
} from '../../store/platform';
import { dataParamType } from '../../types/platform';
import { usePlatformModel } from '../../api/models/usePlatformModel';

const PlatformReports = () => {
  const { getPlatformChartData, getPlatformTableData } =
    usePlatformModel();
  useEffect(() => {
    getPlatformChartData(new Date('2022-02-11'), 6).then(result =>
      console.log('차트', result),
    );
    getPlatformTableData(new Date('2022-02-11'), 6).then(result =>
      console.log('테이블', result),
    );
  }, []);

  return (
    <StyledItem>
      <StackedBarChart />
      <TableContainer sx={{ oveflow: 'scroll', mt: 2 }}>
        <Table
          stickyHeader
          aria-label="simple table"
          sx={{ minWidth: '1200px' }}
        >
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>광고비</TableCell>
              <TableCell>매출</TableCell>
              <TableCell>ROAS</TableCell>
              <TableCell>노출 수</TableCell>
              <TableCell>클릭 수</TableCell>
              <TableCell>클릭율</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>메타</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>카카오</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>구글</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>총계</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
              <TableCell>12.352</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledItem>
  );
};

export default PlatformReports;

const StyledItem = styled(Box)(({ theme }) => ({
  paddingBlock: 30,
  paddingInline: 35,
  [theme.breakpoints.down('md')]: {
    marginTop: 20,
    paddingInline: 16,
  },
  background: '#fff',
  minHeight: 400,
  borderRadius: 5,
}));
