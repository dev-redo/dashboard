import {
  Box,
  styled,
  FormControl,
  Select,
  MenuItem,
  Link,
  Grid,
} from "@mui/material";
import ManageItem from "./ManageItem";

const ManageList = () => {
  return (
    <StyledItem>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            value=""
            displayEmpty
            //onChange={}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>전체 광고</em>
            </MenuItem>
            <MenuItem value={10}>진행중</MenuItem>
            <MenuItem value={20}>종료</MenuItem>
          </Select>
        </FormControl>
        <Link href="/campaign-create" underline="none">
          광고 만들기
        </Link>
      </Box>

      <Grid container spacing={2}>
        <ManageItem />
      </Grid>
    </StyledItem>
  );
};

export default ManageList;

const StyledItem = styled(Box)(({ theme }) => ({
  paddingBlock: 30,
  paddingInline: 35,
  [theme.breakpoints.down("md")]: {
    marginTop: 20,
    paddingInline: 16,
  },
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
}));
