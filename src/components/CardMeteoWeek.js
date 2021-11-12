import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardMeteoWeek = (props) => {
  const { time } = props;
  return (
    <div className="cardDiv">
      <Card sx={{ maxWidth: 345 }}>
        {/* Image de fond */}
        <CardMedia className={time.weather[0].main} />
        <CardContent>
          {/* Date */}
          <Typography gutterBottom variant="h5" component="div">
            {time.dt_txt.slice(8, 10)}/{time.dt_txt.slice(5, 7)}
          </Typography>

          {/* Heure */}
          <Typography variant="body2" color="text.secondary">
            {time.dt_txt.slice(11, 16)}
          </Typography>

          {/* Temperature */}
          <Typography variant="body2" color="text.secondary">
            {Math.round(time.main.temp)}°
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardMeteoWeek;
