import { colors, createTheme } from "@mui/material";
// import "../assets/fonts/include.scss";
import "./Mui_Custom.scss";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FED36A ",
      contrastText: "#000000",
    },
    success: {
      main: "#18CB5F",
      lightest: "#D4EEDE",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#CB1818",
      lightest: "#EED4D4",
    },
    warning: {
      main: "#F19B02",
      lightest: "#FDF0D9",
    },
    secondary: {
      main: "#263238",
    },
    background: {
      paper: "#455A64",
      default: "#212832 ",
      // med: "#455A64",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#8CAAB9",
      disabled: colors.grey[600],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
