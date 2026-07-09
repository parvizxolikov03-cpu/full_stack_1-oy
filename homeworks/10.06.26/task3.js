// 9. Yangi yilgacha necha kun qolganini hisoblang.

function daysToNewyear() {
  const date = new Date();
  const yangiYil = new Date(date.getFullYear() + 1, 0, 1);

  return (yangiYil - Date.now()) / (24 * 3600 * 1000);
}

console.log(Math.floor(daysToNewyear()));
