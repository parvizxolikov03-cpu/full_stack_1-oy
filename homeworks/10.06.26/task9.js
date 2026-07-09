//  Berilgan sananing oy nomini toping

function getMonthName(date) {
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  return months[date.getMonth()];
}

console.log(getMonthName(new Date("2025-08-20")));
