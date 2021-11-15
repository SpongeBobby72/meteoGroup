// Date Format
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
