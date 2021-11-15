import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ArrowCircleUp } from "@mui/icons-material";
import {func} from "../utils"

const ForeCast = (data) => {
  // const {directionWin, dateFormatMeteo } = require("../util");
  // console.log(data.daily.weather[0].main);
  
  // const {dateFormatMeteo, directionWin} = require("../util/index")
  // const func = require ("../utils")

  return (
    <div className="cardDiv">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className={data.daily.weather[0].main} />
        <CardContent>
          <Typography sx={{ color: "white" }} component="p">
            {func.dateFormatMeteo(data.daily.dt)}
            {/* {fs.dateFormatMeteo(data.daily.dt)} */}
          </Typography>

          <Typography sx={{ color: "white" }} component="div">
            {data.daily.weather[0].description}
          </Typography>

          <Typography
            sx={{ color: "white" }}
            variant="p"
            color="text.secondary"
            component="div"
          >
            {Math.round(data.daily.temp.day)} °C
          </Typography>

          <Typography sx={{ mr:1,color: "white" }} component="span">
            {Math.round(data.daily.wind_speed)} km/h
          </Typography>

          <Typography sx={{color: "white" }} component="span">
            {/* ( {fs.directionWin(data.daily.wind_deg)} ) */}
          </Typography>

          <ArrowCircleUp
            sx={{
              color: "white",
              transform: `rotateZ(${data.daily.wind_deg}deg)`,
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeCast;
