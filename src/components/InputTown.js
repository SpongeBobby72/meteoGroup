import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
        <TextField
          id="ville"
          label="Ville"
          variant="outlined"
        />
        <input type="button" value="Click me" onClick={(e) => getValue(e)} />
      </Box>
    </div>
  );
};

export default InputTown;
