import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Cards from "./Cards";

const Buttons = () => {
  return (
    <div>
      {/* <Cards/> */}
      <Stack direction="row" spacing={2}>
        <Button href="/articles" variant="contained" color="warning">
          ARTICLE
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
