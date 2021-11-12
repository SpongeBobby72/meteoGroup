import { CardContent } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import RainCard from "./RainCard"


function MeteoRainHour() {
    const dataAll = useSelector((state) => state.weather.dataAll);
    const dataRain = useSelector((state) => state.weather.dataRain);
    // console.log(dataAll);


    return (
        <div className="meteoWeek">
            {dataAll.daily && dataRain.minutely && (
                <CardContent className="meteoWeekUl">
                    {dataAll.minutely.map((data, index) => (
                        <RainCard minutely={data} key={index} />
                    ))}
                </CardContent>
            )}

        </div>
    )
}

export default MeteoRainHour
