import { CardContent } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

import RainCard from "./RainCard"


function MeteoRainHour() {
    const data = useSelector((state) => state.weather.data);
    // console.log('api kevin',data);
    const dataAll = useSelector((state) => state.weather.dataAll);
    // console.log(typeof dataAll);
    // const minutely , la boucle for permet de prendre 1 elément sur 10 dans la tableau
    const minutely = [];

    if (dataAll.minutely) {
        for (let i = 0; i < dataAll.minutely.length;) {
            minutely.push(dataAll.minutely[i]);
            i = i + 10;
        }
        console.log(minutely);
    }


    return (
        <div className="meteoWeek">
            <h1 className="cardDiv">Pluviométrie</h1>
            {data.weather && dataAll.minutely && (
                <CardContent >
                    {minutely.map((data, index) => (
                        <RainCard minutely={data} key={index} />
                    ))}
                </CardContent>
            )}
        </div>
    )
}

export default MeteoRainHour;
