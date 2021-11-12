import { CardContent } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../store";
import { getMeteoAll } from "../store/actions/WeatherActions";
import ForeCast from "./ForeCast";

const Meteo8Days = () => {
  const data = useSelector((state) => state.weather.data);
  console.log('api kevin',data);
  const dataAll = useSelector((state) => state.weather.dataAll);
  console.log(dataAll);

  useEffect(() => {
    // console.log(data.weather);
    if (data.weather) {
      // console.log(dataCurrent.coord.lat, dataCurrent.coord.lon);
      store.dispatch(getMeteoAll(data.coord.lat, data.coord.lon));
    }
  }, [data]);

  return (
    <div className="meteoWeek">
      {data.weather && dataAll.daily && (
        <CardContent className="meteoWeekUl">
          {dataAll.daily.map((data, index) => (
            <ForeCast daily={data} key={index} />
          ))}
        </CardContent>
      )}
    </div>
  );
};

export default Meteo8Days;
