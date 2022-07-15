import {
  Box,
  styled,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdManageItem = () => {
  const navigate = useNavigate();
  return (
    <StyledAdListWrap item xs={2} sm={4} md={4}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          제목
        </Typography>
        <List>
          <ListItem divider dense disableGutters>
            <ListItemText primary="상태" sx={{ width: 10, color: "#929292" }} />
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary="광고 생성일"
              sx={{ width: 10, color: "#929292" }}
            />
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary="일 희망 예산"
              sx={{ width: 10, color: "#929292" }}
            />
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary="광고 수익률"
              sx={{ width: 10, color: "#929292" }}
            />
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary="광고 비용"
              sx={{ width: 10, color: "#929292" }}
            />
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
        <Button
          variant="outlined"
          color="info"
          sx={{ mt: 2 }}
          onClick={() => navigate("/ad_modify")}
        >
          수정하기
        </Button>
      </CardContent>
    </StyledAdListWrap>
  );
};

export default AdManageItem;

const StyledAdListWrap = styled(Grid)({
  border: "1px solid #dedede",
  // width: "32%",
  //marginTop: "2%",
  // marginRight: "2%",
  //   boxShadow: "none",
  // "&:nth-of-type(3n)": {
  //   marginRight: 0,
  // },
  //   "&:nth-of-type(-n+3)": {
  //     marginTop: 0,
  //   },
});
