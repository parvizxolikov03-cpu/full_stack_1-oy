function sliceWorkingDays(days) {
  let result = days.slice(0, 5);
  return result;
}

let kunlar = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];
console.log(sliceWorkingDays(kunlar));
