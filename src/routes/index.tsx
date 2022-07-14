import Charts from "./Charts/Charts";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdManage from "../pages/Ad/AdManege";
import { ThemeProvider } from "@mui/material";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={"light"}> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ad" element={<AdManage />} />
      </Routes>
      {/* <Charts /> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
};

export default Router;
