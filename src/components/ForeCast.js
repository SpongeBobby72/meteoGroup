import * as React from "react";
// MUI
import * as theme from "../theme";

const ForeCast = (data) => {
  const { dateFormatMeteo } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
    <div className="cardDiv">     
      <theme.Card sx={{ maxWidth: 345 }}>
        <theme.CardMedia className={data.daily.weather[0].main} />
        <theme.CardContent>
          <theme.Typography sx={{ color: "white" }} component="p">
            {dateFormatMeteo(data.daily.dt)}
          </theme.Typography>

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
          </theme.Typography>
        </theme.CardContent>
      </theme.Card>
    </div>
  );
};

export default ForeCast;
