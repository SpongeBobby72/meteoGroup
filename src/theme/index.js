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

/** Material UI **/

// Card
export { default as Card } from "@mui/material/Card";
export { default as CardActions } from "@mui/material/CardActions";
export { default as CardContent } from "@mui/material/CardContent";
export { default as CardMedia } from "@mui/material/CardMedia";
export { default as Typography } from "@mui/material/Typography";

// Button
export { default as Button } from "@mui/material/Button";
export { default as Stack } from "@mui/material/Stack";

// InputTown
export { default as TextField } from "@mui/material/TextField";
export { default as Box } from "@mui/material/Box";

export default theme;
