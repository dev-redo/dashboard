import {
  Box,
  styled,
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import StackedBarChart from "../../routes/Charts/Shapes/StackedBarChart";

const DashboardMedia = () => {
  return (
    <StyledItem>
      <Box sx={{ background: "#d9d7ff", height: 400, display: "flex" }}>
        Stack chart
        <StackedBarChart />
        </Box>
      {/* TODO: 가로스크롤? */}
      
      <TableContainer sx={{ overflowX: "auto", width: "100%", mt: 2 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>광고비</TableCell>
              <TableCell>매출</TableCell>
              <TableCell>ROAS</TableCell>
              <TableCell>노출 수</TableCell>
              <TableCell>클릭 수</TableCell>
              <TableCell>클릭율</TableCell>
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
              <TableCell>12.352</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </StyledItem>
  );
};

export default DashboardMedia;

const StyledItem = styled(Box)({
  paddingBlock: 30,
  paddingInline: 35,
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
});
