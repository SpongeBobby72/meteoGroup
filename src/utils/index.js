// /*
//  * Utils
//  * ******* */

// Import des fonctions

import * as Datee from "./Date/index.js";
// import { direction }  from "./Direction";

// const fn = {
//   dateFormatMeteo,
//   direction,
//   minParser,
// };

console.log('Datteee', Datee)

export default {
  Datee
};




// const dateFormatMeteo = require("./dateFormatMeteo")
// directionWin= require("./directionWin"),
// minParser =require("./minParser")

// module.exports= {
//   // Date Format
//   dateFormatMeteo: require("./dateFormatMeteo")
//   // minParser: minParser

// // Direction format
// directionWin:directionWin,
// };

// export dateFormatMeteo = require("./dateFormatMeteo");
// export directionWin = require("./directionWin");

// export const dateFormatMeteo = "dateFormatMeteo"

// // Date Format
// export const dateFormatMeteo = (date) => {
//   const dateUnix = new Date(date*1000);
//   let weekday =new Date(dateUnix).toLocaleDateString("fr-FR", {
//     // year: "numeric",
//     // month: "long",
//     weekday:"long"
//   });

//   let day =new Date(dateUnix).toLocaleDateString("fr-FR", {
//     day: "numeric",
//   });

//   let newDate = weekday.substr(0, 3) + ". " + day
//   return newDate
// };

// export const datePaser = (date) => {
//   let newDate = new Date(date).toLocaleDateString('fr-FR',{
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
//   })

//   return newDate
// };

// export const minParser = (date) => {
//   const dateMin = new Date(date*1000);
//   let newDate = new Date(dateMin ).toLocaleDateString('fr-FR',{
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//   })
//   let hour = newDate.split(',');
//   console.log(hour[1]);
//   return hour[1]
// };

// export const directionWin = (data) => {
//   let dataNumber = parseFloat(data)
//   const quadrants = ["NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]

//   if (dataNumber > 348.75 || dataNumber <= 11.25)
//   {
//     return "N"
//   }
//   else {
//     let index = Math.floor(((dataNumber - 11.25) / 22.5)+1)
//     // console.log(index)
//     return quadrants[index-1]

//   }
// };
