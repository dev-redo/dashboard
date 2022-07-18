import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Managecampaigns from '../pages/Managecampaigns';
import Createcampaign from '../pages/Createcampaign';
import Editcampaign from '../pages/Editcampaign';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/theme';
import { RecoilRoot } from 'recoil';

const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/campaign-manage' element={<Managecampaigns />} />
            <Route path='/campaign-create' element={<Createcampaign />} />
            <Route path='/campaign-edit' element={<Editcampaign />} />
          </Routes>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
