import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import Header from "./Header";
interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const onMenuHandler = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        mobileOpen={isMobileOpen}
        onMenuHandler={onMenuHandler}
        drawerWidth={drawerWidth}
      />
      <Box sx={{ flex: 1 }}>
        <Header onMenuHandler={onMenuHandler} drawerWidth={drawerWidth} />
        <StyledWrapper>{children}</StyledWrapper>
      </Box>
    </Box>
  );
};

export default Layout;

const StyledWrapper = styled(Box)({
  overflowY: "scroll",
  height: "100%",
  background: "#f6f6f6",
  paddingTop: 64,
});
