import {
  Box,
  styled,
  FormControl,
  Select,
  MenuItem,
  Link,
  Grid,
} from "@mui/material";
import AdManageItem from "./ManageItem";

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
            <MenuItem value={10}>광고1</MenuItem>
            <MenuItem value={20}>광고2</MenuItem>
            <MenuItem value={30}>광고3</MenuItem>
          </Select>
        </FormControl>
        <Link href="/campagin-create" underline="none">
          광고 만들기
        </Link>
      </Box>

      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <AdManageItem />
        <AdManageItem />
        <AdManageItem />
        <AdManageItem />
        <AdManageItem />
        <AdManageItem />
      </Grid>
    </StyledItem>
  );
};

export default ManageList;

const StyledItem = styled(Box)({
  paddingBlock: 30,
  paddingInline: 35,
  background: "#fff",
  minHeight: 400,
  borderRadius: 5,
  width: "100%",
});
