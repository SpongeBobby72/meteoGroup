// import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#26292B",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#d50000",
    },
  },
});

// MUI
export { default as Card } from "@mui/material/Card";
export { default as CardActions } from "@mui/material/CardActions";
export { default as CardContent } from "@mui/material/CardContent";
export { default as CardMedia } from "@mui/material/CardMedia";
export { default as Typography } from "@mui/material/Typography";

export default theme;
