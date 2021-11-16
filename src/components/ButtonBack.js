import React from "react";
// MUI
import * as theme from "../theme";

const ButtonBack = () => {
  return (
    <div>
      <theme.Stack
        sx={{ display: "flex", justifyContent: "center" }}
        direction="row"
        spacing={2}
      >
        <theme.Button href="/" variant="contained" color="warning">
          RETOUR
        </theme.Button>
      </theme.Stack>
    </div>
  );
};

export default ButtonBack;
