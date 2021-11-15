//         *************************************
// ******* COMPONENT PARENT DE MeteoRainHour.js *******
//         *************************************
import * as React from "react";

 //import component Mui
import * as theme from "../theme";

const RainCard = (data) => {
  // const { minParser } = require("../util/index");
  // console.log(data.daily.weather[0].main);

  return (
      
    <div className="cardDiv">
        
      <theme.Card sx={{ width: 100 ,backgroundColor: 'transparent'}}>
      
        <theme.CardContent> 
          <theme.Typography  component="p" sx={{color:"white"}}>
          {/* {MinParser(data.minutely.dt)} */}
          </theme.Typography>

          <theme.Typography component="p" sx={{color:"white"}}>
          {data.minutely.precipitation} % 
          </theme.Typography>
        </theme.CardContent>
      </theme.Card>
    </div>
  );
};

export default RainCard;