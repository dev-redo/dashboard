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
  IconButton,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PostAddIcon from "@mui/icons-material/PostAdd";

interface SidebarProps {
  mobileOpen: boolean;
  onMenuHandler: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onMenuHandler }) => {
  const drawerWidth = 300;

  const drawer = (
    <Box>
      <Divider />
      <List sx={{ padding: 0 }}>
        <StyledLink href="/" color="inherit">
          <ListItem disablePadding>
            <ListItemButton sx={{ pt: 2, pb: 2 }}>
              <ListItemIcon>
                <StackedLineChartIcon />
              </ListItemIcon>
              <span>대시보드</span>
            </ListItemButton>
          </ListItem>
        </StyledLink>
        <StyledLink href="/ad" color="inherit">
          <ListItem disablePadding>
            <ListItemButton sx={{ pt: 2, pb: 2 }}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <span>광고관리</span>
            </ListItemButton>
          </ListItem>
        </StyledLink>
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
        open={mobileOpen}
        onClose={onMenuHandler}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
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

const StyledLink = styled(Link)({
  textDecoration: "none",
  fontSize: 18,
  display: "block",
});
