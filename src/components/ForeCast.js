
import * as React from "react";
// MUI
import * as theme from "../theme";

//import des fonctions
import * as fn from "../utils"

const ForeCast = (data) => {

  return (
    <div className="cardDiv">
      <theme.Card sx={{ maxWidth: 345 }}>
        <theme.CardMedia className={data.daily.weather[0].main} />
        <theme.CardContent>
          <theme.Typography sx={{ color: "white" }} component="p">
            {fn.dateFormatMeteo(data.daily.dt)}
          </theme.Typography>

          <theme.Typography sx={{ color: "white" }} component="p">
            {data.daily.weather[0].description}
          </theme.Typography>

          <theme.Typography
            sx={{ color: "white" }}
            variant="p"
            color="text.secondary"
            component="div"
          >
            {Math.round(data.daily.temp.day)} °C
          </theme.Typography>

          <theme.Typography sx={{ color: "white" }} component="p">
            {Math.round(data.daily.wind_speed)} Km/h
          </theme.Typography>

          <theme.Typography sx={{ color: "white", display: "flex", alignSelf: "center"}} component="p">
            {fn.directionWin(data.daily.wind_deg)}
            <theme.ArrowCircleUp sx={{ ml:1, color: "white", transform: `rotateZ(${data.daily.wind_deg}deg)` }} />
          </theme.Typography>

        </theme.CardContent>
      </theme.Card>
    </div>
  );
};

export default ForeCast;
