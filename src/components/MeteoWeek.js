import React from "react";
import CardContent from '@mui/material/CardContent';
import { useSelector } from "react-redux";
import CardMeteoWeek from "./CardMeteoWeek";

const MeteoWeek = () => {
  const dataWeek = useSelector((state) => state.weather.dataWeek);
  dataWeek.length = 6;
  // console.log(dataWeek)

  return (
    <div className="meteoWeek">
      {dataWeek[0] && (
        <CardContent className="meteoWeekUl">
          {dataWeek.map((time) => (
            <CardMeteoWeek time={time} key={time.dt} />
          ))}
        </CardContent>
      )}
    </div>
  );
};

export default MeteoWeek;
