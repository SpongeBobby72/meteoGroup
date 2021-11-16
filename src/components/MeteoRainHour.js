//         *************************************
// ******* COMPONENT ENFANT DE RainCard.js *******
//         *************************************
import React from "react";

import { useSelector } from "react-redux";

import RainCard from "./RainCard"
import * as theme from "../theme";

function MeteoRainHour() {
    const data = useSelector((state) => state.weather.data);
    
    const dataAll = useSelector((state) => state.weather.dataAll);
    
    // const minutely , la boucle for permet de prendre 1 elément sur 10 dans la tableau
    const minutely = [];

    if (dataAll.minutely) {
        for (let i = 0; i < dataAll.minutely.length;) {
            minutely.push(dataAll.minutely[i]);
            i = i + 10;
        }
        // console.log(minutely);
    }

    return (
        <div className="meteoWeek">
            <h1 className="cardDiv">Pluviométrie</h1>
            {data.weather && dataAll.minutely && (
                <theme.CardContent>
                    {minutely.map((data, index) => (
                        <RainCard minutely={data} key={index} />
                    ))}
                </theme.CardContent>
            )}
        </div>
    )
}

export default MeteoRainHour;
