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
import { useRecoilValue } from 'recoil';
import {
  startData,
  endData,
} from '../../store/global';
import {
  parseISO,
  eachDayOfInterval,
} from 'date-fns';
import { usePlatformModel } from '../../api/models/usePlatformModel';

const PlatformReports = () => {
  const start = useRecoilValue(startData);
  const end = useRecoilValue(endData);

  const getEndDate = eachDayOfInterval({
    start: parseISO(start),
    end: parseISO(end),
  });

  const [tableAdData, setTableAdData] = useState({
    channelTableData: [],
    tableSumData: [],
  });
  const { channelTableData, tableSumData } = tableAdData;

  const { getPlatformTableData } = usePlatformModel();

  useEffect(() => {
    async function fetchAndSetTableData() {
      const response = (await getPlatformTableData(
        parseISO(start),
        getEndDate.length,
      ).then(result => result)) as any;

      setTableAdData(response);
    }
    fetchAndSetTableData();
  }, [start, end]);

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
              <TableCell>노출수</TableCell>
              <TableCell>광고단가</TableCell>
              <TableCell>클릭수</TableCell>
              <TableCell>광고수익률</TableCell>
              <TableCell>전환값</TableCell>
              <TableCell>클릭율</TableCell>
              <TableCell>전환율</TableCell>
              <TableCell>클릭단가</TableCell>
              <TableCell>전환단가</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {channelTableData?.map((table, idx) => {
              const { name, tableData } = table;
              return (
                <TableRow key={`${table}-table-row-${idx}`}>
                  <TableCell>{name}</TableCell>
                  {Object.values(tableData).map((ad: any) => (
                    <TableCell
                      key={`${ad}-table-channel-item-${idx}`}
                    >
                      {ad}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell>총계</TableCell>
              {tableSumData?.map((table, idx) => {
                const { name, sum } = table;
                return (
                  <TableCell key={`${name}-table-sum-item-${idx}`}>
                    {sum}
                  </TableCell>
                );
              })}
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
