import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const RainCard = (data) => {
  // const { minParser } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
      
    <div className="cardDiv">
        
      <Card sx={{ width: 100 ,backgroundColor: 'transparent'}}>
      
        <CardContent> 
          <Typography  component="p" sx={{color:"white"}}>
          {/* {minParser(data.minutely.dt)} */}
          </Typography>

          <Typography component="p" sx={{color:"white"}}>
          {data.minutely.precipitation} % 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RainCard;