import { CardContent } from "@mui/material";
import React, { useEffect } from "react";
import { store } from "../store";
import { useSelector } from "react-redux";
import { getMeteoAll } from "../store/actions/WeatherActions";
import RainCard from "./RainCard"


function MeteoRainHour() {
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
            {data.weather && dataAll.minutely && (
                <CardContent className="meteoWeekUl">
                    {dataAll.minutely.map((data, index) => (
                        <RainCard minutely={data} key={index} />
                    ))}
                </CardContent>
            )}

        </div>
    )
}

export default MeteoRainHour;
