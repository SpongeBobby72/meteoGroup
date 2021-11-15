import React from "react";
import { useSelector } from "react-redux";
import CardMeteoWeek from "./CardMeteoWeek";

//import component Mui
import * as theme from "../theme";

const MeteoWeek = () => {
  const dataWeek = useSelector((state) => state.weather.dataWeek);
  dataWeek.length = 6;
  // console.log(dataWeek)

  return (
    <div className="meteoWeek">
      {dataWeek[0] && (
        <theme.CardContent className="meteoWeekUl">
          {dataWeek.map((time) => (
            <CardMeteoWeek time={time} key={time.dt} />
          ))}
        </theme.CardContent>
      )}
    </div>
  );
};

export default MeteoWeek;
