import Charts from "./Charts/Charts";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdManage from "../pages/AdManege";
import AdMake from "../pages/AdMake";
import AdModify from "../pages/AdModify";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ad" element={<AdManage />} />
          <Route path="/ad_make" element={<AdMake />} />
          <Route path="/ad_modify" element={<AdModify />} />
        </Routes>
        {/* <Charts /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
