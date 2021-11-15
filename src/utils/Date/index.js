// module.exports = {
//   dateFormatMeteo: function (date) {
//     const dateUnix = new Date(date * 1000);
//     let weekday = new Date(dateUnix).toLocaleDateString("fr-FR", {
//       // year: "numeric",
//       // month: "long",
//       weekday: "long",
//     });

//     let day = new Date(dateUnix).toLocaleDateString("fr-FR", {
//       day: "numeric",
//     });

//     let newDate = weekday.substr(0, 3) + ". " + day;
//     return newDate;
//   }
// };

export function dateFormatMeteo(date) {
  const dateUnix = new Date(date * 1000);
  let weekday = new Date(dateUnix).toLocaleDateString("fr-FR", {
    // year: "numeric",
    // month: "long",
    weekday: "long",
  });

  let day = new Date(dateUnix).toLocaleDateString("fr-FR", {
    day: "numeric",
  });

  let newDate = weekday.substr(0, 3) + ". " + day;
  return newDate;
}

export const minParser = (date) => {
  const dateMin = new Date(date*1000);
  let newDate = new Date(dateMin ).toLocaleDateString('fr-FR',{
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
  let hour = newDate.split(',');
  console.log(hour[1]);
  return hour[1]
};


export default {
  dateFormatMeteo,
  minParser
  
}