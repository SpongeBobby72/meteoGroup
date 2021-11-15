import React from "react";
// MUI
import * as theme from "../theme";

const Buttons = () => {
  return (
    <div>
      <theme.Stack direction="row" spacing={2}>
        <theme.Button href="/articles#/article" variant="contained" color="warning">
          ARTICLE
        </theme.Button>
      </theme.Stack>
    </div>
  );
};

export default Buttons;
