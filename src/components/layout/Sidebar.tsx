import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  styled,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";

const drawerWidth = 300;

const StyledLink = styled(Link)({
  textDecoration: "none",
  fontSize: 18,
});

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const drawer = (
    <Box>
      <Divider />
      <List sx={{ padding: 0 }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ pt: 2, pb: 2 }}>
            <ListItemIcon>
              <StackedLineChartIcon />
            </ListItemIcon>
            <StyledLink href="/" color="inherit">
              대시보드
            </StyledLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pt: 2, pb: 2 }}>
            <ListItemIcon></ListItemIcon>
            <StyledLink href="/ad" color="inherit">
              광고관리
            </StyledLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* mobile */}
      <Drawer
        variant="temporary"
        open={isMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Typography>모바일</Typography>
        {drawer}
      </Drawer>
      {/* pc */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Typography
          variant="h5"
          sx={{ pt: 6, pb: 6, fontWeight: 700, textAlign: "center" }}
        >
          Dashboard
        </Typography>
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
