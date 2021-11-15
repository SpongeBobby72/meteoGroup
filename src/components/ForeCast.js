import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ForeCast = (data) => {
  const { dateFormatMeteo } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
    <div className="cardDiv">     
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className={data.daily.weather[0].main} />
        <CardContent>
          <Typography sx={{ color: "white" }} component="p">
            {dateFormatMeteo(data.daily.dt)}
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ForeCast;
