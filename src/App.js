import React, { useState } from "react";
import MeteoDay from "./components/MeteoDay";
import MeteoWeek from "./components/MeteoWeek";
import NavBar from "./components/NavBar";

const App = () => {
  const [playOnce, setPlayOnce] = useState(true);
  const [weatherStyleApp, setWeatherStyleApp] = useState("nightApp");
  const timer = new Date(Date.now()).toString().slice(16, 18);

  if (playOnce) {
    if ((6 < timer) && (timer < 19)) {
      setWeatherStyleApp("dayApp");
      setPlayOnce(false);
    }
  }

  return (
    <div className={weatherStyleApp}>
      <MeteoDay />
      <MeteoWeek />
      <NavBar />
    </div>
  );
};

export default App;
