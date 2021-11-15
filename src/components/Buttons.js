import React from "react";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

import * as Mui from '@mui/material';

const Buttons = () => {
  return (
    <div>
<<<<<<< HEAD
      {/* <Cards/> */}
      <Stack direction="row" spacing={2}>
        <Button href="/articles#/article" variant="contained" color="warning">
=======
      <Mui.Stack direction="row" spacing={2}>
        <Mui.Button href="/articles#/article" variant="contained" color="warning">
>>>>>>> 05da7c96ca90f92b08b8fbd9baa8fc07ebee8446
          ARTICLE
        </Mui.Button>
      </Mui.Stack>
    </div>
  );
};

export default Buttons;
