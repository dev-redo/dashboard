import { createTheme } from "@mui/material";

// 1. theme 객체 확장
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "white",
    },
  },
});
