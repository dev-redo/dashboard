import Charts from "./Charts/Charts";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdManage from "../pages/AdManege";
import CreateCampagin from "../pages/CreateCampagin";
import EditCampagin from "../pages/EditCampagin";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ad" element={<AdManage />} />
          <Route path="/campagin-create" element={<CreateCampagin />} />
          <Route path="/campagin-edit" element={<EditCampagin />} />
        </Routes>
        {/* <Charts /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
