//         *************************************
// ******* COMPONENT PARENT DE MeteoRainHour.js *******
//         *************************************
import * as React from "react";
<<<<<<< HEAD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Datee} from "../utils/index";
=======

 //import component Mui
import * as theme from "../theme";
>>>>>>> dev

const RainCard = (data) => {
  // const { minParser } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
      
    <div className="cardDiv">
        
      <theme.Card sx={{ width: 100 ,backgroundColor: 'transparent'}}>
      
<<<<<<< HEAD
        <CardContent> 
          <Typography  component="p" sx={{color:"white"}}>
          {Datee.minParser(data.minutely.dt)}
          </Typography>
=======
        <theme.CardContent> 
          <theme.Typography  component="p" sx={{color:"white"}}>
          {MinParser(data.minutely.dt)}
          </theme.Typography>
>>>>>>> dev

          <theme.Typography component="p" sx={{color:"white"}}>
          {data.minutely.precipitation} % 
          </theme.Typography>
        </theme.CardContent>
      </theme.Card>
    </div>
  );
};

export default RainCard;