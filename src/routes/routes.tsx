import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageCampagins from "../pages/ManageCampagins";
import CreateCampagin from "../pages/CreateCampagin";
import EditCampagin from "../pages/EditCampagin";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import { RecoilRoot } from 'recoil';

const Router = () => {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campagin-manage" element={<ManageCampagins />} />
          <Route path="/campagin-create" element={<CreateCampagin />} />
          <Route path="/campagin-edit" element={<EditCampagin />} />
        </Routes>
      </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default Router;
