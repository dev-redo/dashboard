import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  styled,
  Box,
  Badge,
  Avatar,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

interface HeaderProps {
  onMenuHandler: () => void;
  drawerWidth: number;
}

const Header: React.FC<HeaderProps> = ({ onMenuHandler, drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#3d5bda",
      }}
    >
      <StyledToolbar>
        <Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuHandler}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Icons>
          <Badge>
            <NotificationsNoneIcon fontSize="large" />
          </Badge>
          <Badge>
            <SettingsIcon fontSize="large" />
          </Badge>
          <UserBox>
            <Avatar sx={{ mr: 2 }} />
            <Typography>user</Typography>
          </UserBox>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
