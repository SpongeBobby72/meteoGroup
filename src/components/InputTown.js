import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { store } from "../store";

import { getWeather, getWeathersWeek } from "../store/actions/WeatherActions";

const InputTown = (props) => {

  function handleChangeSelect(e) {
    if (e.target.value.length > 0) {
      store.dispatch(getWeather(e.target.value));
      store.dispatch(getWeathersWeek(e.target.value));
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
        <TextField
          id="ville"
          label="Ville"
          variant="outlined"
          onChange={(e) => handleChangeSelect(e)}
        />
      </Box>
    </div>
  );
};

export default InputTown;
