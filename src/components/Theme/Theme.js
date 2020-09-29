import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1778F2",
    },
    secondary: {
      main: "#FF3333",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F5F5F5",
    },
  },
});
