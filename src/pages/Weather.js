import React, { useState } from "react";
import MeteoDay from "../components/MeteoDay";
import MeteoWeek from "../components/MeteoWeek";
import NavBar from "../components/NavBar";
import Meteo8Days from "../components/Meteo8Days";
import MeteoRainHour from "../components/MeteoRainHour";
import WeatherMap from "../components/WeatherMap";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Weather = () => {
  const [playOnce, setPlayOnce] = useState(true);
  const [weatherStyleApp, setWeatherStyleApp] = useState("nightApp");
  const timer = new Date(Date.now()).toString().slice(16, 18);

  if (playOnce) {
    if (6 < timer && timer < 19) {
      setWeatherStyleApp("dayApp");
      setPlayOnce(false);
    }
  }

  return (
    <div className={weatherStyleApp}>
      <React.Fragment>
        <CssBaseline />
        <Container className="containerTop" maxWidth="xl">
          <MeteoDay />
          <WeatherMap />
        </Container>
      </React.Fragment>
      <MeteoWeek />
      <Meteo8Days />
      <MeteoRainHour />
      <NavBar />
    </div>
  );
};

export default Weather;
