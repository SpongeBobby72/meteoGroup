import * as React from "react";
<<<<<<< HEAD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ArrowCircleUp } from "@mui/icons-material";
import fn from "../utils";
=======
// MUI
import * as theme from "../theme";
>>>>>>> dev

const ForeCast = (data) => {
  // const {directionWin, dateFormatMeteo } = require("../util");
  // console.log(data.daily.weather[0].main);

  // const {dateFormatMeteo, directionWin} = require("../util/index")
  // const func = require ("../utils")

  return (
<<<<<<< HEAD
    <div className="cardDiv">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className={data.daily.weather[0].main} />
        <CardContent>
          <Typography sx={{ color: "white" }} component="p">
            {/* {fn.dateFormatMeteo(data.daily.dt)} */}
          </Typography>
=======
    <div className="cardDiv">     
      <theme.Card sx={{ maxWidth: 345 }}>
        <theme.CardMedia className={data.daily.weather[0].main} />
        <theme.CardContent>
          <theme.Typography sx={{ color: "white" }} component="p">
            {dateFormatMeteo(data.daily.dt)}
          </theme.Typography>
>>>>>>> dev

          <theme.Typography sx={{ color: "white" }} component="div">
            {data.daily.weather[0].description}
          </theme.Typography>

          <theme.Typography
            sx={{ color: "white" }}
            variant="p"
            color="text.secondary"
            component="div"
          >
            {Math.round(data.daily.temp.day)} °C
<<<<<<< HEAD
          </Typography>

          <Typography sx={{ mr: 1, color: "white" }} component="span">
            {Math.round(data.daily.wind_speed)} km/h
          </Typography>

          <Typography sx={{ color: "white" }} component="span">
            {/* ( {fn.directionWin(data.daily.wind_deg)} ) */}
          </Typography>

          <ArrowCircleUp
            sx={{
              color: "white",
              transform: `rotateZ(${data.daily.wind_deg}deg)`,
            }}
          />
        </CardContent>
      </Card>
=======
          </theme.Typography>
        </theme.CardContent>
      </theme.Card>
>>>>>>> dev
    </div>
  );
};

export default ForeCast;
