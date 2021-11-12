import { CardContent } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

import RainCard from "./RainCard"


function MeteoRainHour() {
    const data = useSelector((state) => state.weather.data);
    console.log('api kevin',data);
    const dataAll = useSelector((state) => state.weather.dataAll);
    console.log(dataAll);
 
   

    return (
        <div className="meteoWeek">
            <h1 className="cardDiv">Pluviométrie</h1>
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
