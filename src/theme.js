import { createTheme } from "@material-ui/core";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
