import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { store } from "../store";

import { getWeather, getWeathersWeek } from "../store/actions/WeatherActions";

const InputTown = (props) => {
  function getValue() {
    var input = document.getElementById("ville").value;
    if (input.length > 0) {
      store.dispatch(getWeather(input));
      store.dispatch(getWeathersWeek(input));
    }
  }

  return (
    <div className="InputTown">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="ville" label="Ville" variant="outlined" />
        <Stack spacing={2} direction="row">
          <Button onClick={(e) => getValue(e)} variant="contained">
            OK
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default InputTown;
