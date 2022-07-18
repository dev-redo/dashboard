import {
  styled,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ManageItem = () => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={{ padding: 2, border: '1px solid #dedede' }}>
        <Typography sx={{ fontSize: 18 }} gutterBottom>
          제목
        </Typography>
        <List>
          <ListItem divider dense disableGutters>
            <ListItemText primary='상태' sx={{ width: 10, color: '#929292' }} />
            <ListItemText primary='Single-line item' />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary='광고 생성일'
              sx={{ width: 10, color: '#929292' }}
            />
            <ListItemText primary='Single-line item' />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary='일 희망 예산'
              sx={{ width: 10, color: '#929292' }}
            />
            <ListItemText primary='Single-line item' />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary='광고 수익률'
              sx={{ width: 10, color: '#929292' }}
            />
            <ListItemText primary='Single-line item' />
          </ListItem>
          <ListItem divider dense disableGutters>
            <ListItemText
              primary='광고 비용'
              sx={{ width: 10, color: '#929292' }}
            />
            <ListItemText primary='Single-line item' />
          </ListItem>
        </List>
        <Button
          variant='outlined'
          color='primary'
          sx={{ mt: 2 }}
          onClick={() => navigate('/campaign-edit')}
        >
          수정하기
        </Button>
      </Box>
    </Grid>
  );
};

export default ManageItem;
