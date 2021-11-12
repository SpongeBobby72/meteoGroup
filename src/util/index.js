/*
 * Utils
 * ******* */

// Date Format
export const dateFormatMeteo = (date) => {
  const dateUnix = new Date(date*1000);
  let newDate =new Date(dateUnix).toLocaleDateString("fr-FR", {
    // year: "numeric",
    // month: "long",
    day: "numeric",
    weekday:"long"
  });
  return newDate;
};


export const datePaser = (date) => {
  let newDate = new Date(date).toLocaleDateString('fr-FR',{
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })
  return newDate
};

export const MinParser = (date) => {
  const dateMin = new Date(date*1000);
  let newDate = new Date(dateMin ).toLocaleDateString('fr-FR',{
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })
  return newDate
};