import {
  styled,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CampaignList from "../../data/campaign-list.json";

const ManageItem = () => {
  const campaignList = CampaignList.ads;

  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={6} lg={4}>
      {campaignList.map((data) => {
        // if (data.status === "active") {
        //   return "진행중";
        // } else return "종료";
        return (
          <Box key={data.id} sx={{ padding: 2, border: "1px solid #dedede" }}>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              {data.title}
            </Typography>
            <List>
              <ListItem divider dense disableGutters>
                <ListItemText
                  primary="상태"
                  sx={{ width: 10, color: "#929292" }}
                />
                <ListItemText primary={data.status} />
              </ListItem>
              <ListItem divider dense disableGutters>
                <ListItemText
                  primary="광고 생성일"
                  sx={{ width: 10, color: "#929292" }}
                />
                <ListItemText primary={data.startDate} />
              </ListItem>
              <ListItem divider dense disableGutters>
                <ListItemText
                  primary="일 희망 예산"
                  sx={{ width: 10, color: "#929292" }}
                />
                <ListItemText primary={data.budget} />
              </ListItem>
              <ListItem divider dense disableGutters>
                <ListItemText
                  primary="광고 수익률"
                  sx={{ width: 10, color: "#929292" }}
                />
                <ListItemText primary={data.report.roas} />
              </ListItem>
              <ListItem divider dense disableGutters>
                <ListItemText
                  primary="광고 비용"
                  sx={{ width: 10, color: "#929292" }}
                />
                <ListItemText primary={data.report.cost} />
              </ListItem>
            </List>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => navigate("/campaign-edit")}
            >
              수정하기
            </Button>
          </Box>
        );
      })}
    </Grid>
  );
};

export default ManageItem;
