import Charts from "./Charts/Charts";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdManage from "../pages/AdManege";
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ad" element={<AdManage />} />
        </Routes>
        {/* <Charts /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
