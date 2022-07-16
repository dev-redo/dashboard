import React, { useState } from "react";
import { Container, Box, styled, useMediaQuery } from "@mui/material";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const sidebarWidth = 240;

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(true);
  const md = useMediaQuery("(max-width:900px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", background: "#f6f6f6" }}>
      <Header
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        menuWidth={sidebarWidth}
        open={open}
        md={md}
      />
      <Main open={open} md={md}>
        <StyledWrapper maxWidth="xl">{children}</StyledWrapper>
      </Main>
    </Box>
  );
};

export default Layout;

const StyledWrapper = styled(Container, {
  shouldForwardProp: (prop) => prop !== "md",
})<{
  md?: boolean;
}>(({ theme, md }) => ({
  overflowY: "scroll",
  width: "100%",
  height: "100%",
  paddingTop: 100,
  paddingBottom: 80,
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "md",
})<{
  open?: boolean;
  md?: boolean;
}>(({ theme, open, md }) => ({
  flexGrow: 1,
  width: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: md ? 0 : `-${sidebarWidth}px`,
  ...(open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
