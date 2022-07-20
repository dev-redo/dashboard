import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ManageItem = (props: any) => {
  const campaignList = props.props;

  const navigate = useNavigate();
  return (
    <>
      {campaignList.map((data: any) => {
        return (
          <Grid key={data.id} item xs={12} md={6} lg={4}>
            <Box sx={{ padding: 2, border: '1px solid #dedede' }}>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                {data.title}
              </Typography>
              <List>
                <ListItem divider dense disableGutters>
                  <ListItemText
                    primary="상태"
                    sx={{ width: 10, color: '#929292' }}
                  />
                  <ListItemText
                    primary={
                      data.status === 'active' ? '진행중' : '종료'
                    }
                  />
                </ListItem>
                <ListItem divider dense disableGutters>
                  <ListItemText
                    primary="광고 생성일"
                    sx={{ width: 10, color: '#929292' }}
                  />
                  <ListItemText
                    primary={data.startDate.substr(0, 10)}
                  />
                </ListItem>
                <ListItem divider dense disableGutters>
                  <ListItemText
                    primary="일 희망 예산"
                    sx={{ width: 10, color: '#929292' }}
                  />
                  <ListItemText
                    primary={data.budget.toLocaleString()}
                  />
                  원
                </ListItem>
                <ListItem divider dense disableGutters>
                  <ListItemText
                    primary="광고 수익률"
                    sx={{ width: 10, color: '#929292' }}
                  />
                  <ListItemText primary={data.report.roas} />%
                </ListItem>
                <ListItem divider dense disableGutters>
                  <ListItemText
                    primary="광고 비용"
                    sx={{ width: 10, color: '#929292' }}
                  />
                  <ListItemText
                    primary={data.report.cost.toLocaleString()}
                  />
                  원
                </ListItem>
              </List>
              <Button
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => {
                  navigate(`/campaign-edit`, { state: data });
                }}
              >
                수정하기
              </Button>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};

export default ManageItem;
