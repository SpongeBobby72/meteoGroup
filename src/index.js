import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import "./styles/index.scss";
import { store } from "./store";
import { StyledEngineProvider } from "@mui/material/styles";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { getWeather, getWeathersWeek } from "./store/actions/WeatherActions";

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/index';
import "./assets/scss/index.scss";

// Cats
// import { getImages } from "./store/actions/ImagesActions";

store.dispatch(getWeather("Paris"));
store.dispatch(getWeathersWeek("Paris"));
// Cats
// store.dispatch(getImages());

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </StyledEngineProvider>,

  document.getElementById("root")
);
