import React from "react";
// MUI
import * as theme from "../theme";


const CardMeteoWeek = (props) => {
  const { time } = props;
  return (
    <div className="cardDiv">
      <theme.Card sx={{ maxWidth: 345 }}>
        {/* Image de fond */}
        <theme.CardMedia className={time.weather[0].main} />
        <theme.CardContent>
          {/* Date */}
          <theme.Typography gutterBottom variant="h5" component="div">
            {time.dt_txt.slice(8, 10)}/{time.dt_txt.slice(5, 7)}
          </theme.Typography>

          {/* Heure */}
          <theme.Typography variant="body2" color="text.secondary">
            {time.dt_txt.slice(11, 16)}
          </theme.Typography>

          {/* Temperature */}
          <theme.Typography variant="body2" color="text.secondary">
            {Math.round(time.main.temp)}°
          </theme.Typography>
        </theme.CardContent>
      </theme.Card>
    </div>
  );
};

export default CardMeteoWeek;
