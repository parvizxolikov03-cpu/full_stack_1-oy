// Bir yilda nechta dam olish kuni (shanba va yakshanba)
// borligini hisoblang.

function countWeekends(year) {
  let count = 0;

  for (
    let date = new Date(year, 0, 1);
    date.getFullYear() === year;
    date.setDate(date.getDate() + 1)
  ) {
    if (date.getDay() === 0 || date.getDay() === 6) {
      count++;
    }
  }

  return count;
}

console.log(countWeekends(2025));
