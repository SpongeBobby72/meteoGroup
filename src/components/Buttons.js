import React from "react";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

import * as Mui from '@mui/material';

const Buttons = () => {
  return (
    <div>
      <Mui.Stack direction="row" spacing={2}>
        <Mui.Button href="/articles#/article" variant="contained" color="warning">
          ARTICLE
        </Mui.Button>
      </Mui.Stack>
    </div>
  );
};

export default Buttons;
