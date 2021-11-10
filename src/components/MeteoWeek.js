import React from "react";
import { CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardMeteoWeek from "./CardMeteoWeek";

const MeteoWeek = () => {
  const dataWeek = useSelector((state) => state.weather.dataWeek);
  dataWeek.length = 6;
  // console.log(dataWeek)

  return (
    <div className="meteoWeek">
      {dataWeek[0] && (
        <CardGroup className="meteoWeekUl">
          {dataWeek.map((time) => (
            <CardMeteoWeek time={time} key={time.dt} />
          ))}
        </CardGroup>
      )}
    </div>
  );
};

export default MeteoWeek;
