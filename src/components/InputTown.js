import React from "react";
// MUI
import * as theme from "../theme";

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
      <theme.Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <theme.TextField id="ville" label="Ville" variant="outlined" />
        <theme.Stack spacing={2} direction="row">
          <theme.Button onClick={(e) => getValue(e)} variant="contained">
            OK
          </theme.Button>
        </theme.Stack>
      </theme.Box>
    </div>
  );
};

export default InputTown;
