import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/index.scss";
import { store } from "./store";
import { StyledEngineProvider } from "@mui/material/styles";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { getWeather, getWeathersWeek } from "./store/actions/WeatherActions";
// Cats
// import { getImages } from "./store/actions/ImagesActions";

store.dispatch(getWeather("Paris"));
store.dispatch(getWeathersWeek("Paris"));
// Cats
// store.dispatch(getImages());

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </StyledEngineProvider>,

  document.getElementById("root")
);
