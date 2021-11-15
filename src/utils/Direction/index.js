import { directionWin } from "./directionWin"

export default directionWin;

// export const directionWin = (data) => {
//     let dataNumber = parseFloat(data)
//     const quadrants = ["NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"]
              
//     if (dataNumber > 348.75 || dataNumber <= 11.25) 
//     {
//       return "N"
//     }      
//     else {
//       let index = Math.floor(((dataNumber - 11.25) / 22.5)+1)
//       // console.log(index)
//       return quadrants[index-1]
  
//     }
//   };