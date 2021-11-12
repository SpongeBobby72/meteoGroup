import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RainCard = (data) => {
  const { dateFormatMeteo, MinParser } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
      
    <div className="cardDiv">
        
      <Card sx={{ maxWidth: 345 }}>
      
        <CardContent className="cardDiv"> 
        
          <Typography gutterBottom variant="h5" component="div">
            {MinParser(data.minutely.dt)}
          </Typography>

          <Typography component="">
          Risque de pluie: {data.minutely.precipitation} 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RainCard;