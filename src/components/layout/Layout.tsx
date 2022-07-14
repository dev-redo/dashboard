import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flex: 1 }}>
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
