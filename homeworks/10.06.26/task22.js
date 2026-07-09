// Berilgan ikki sana orasida nechta ish kuni borligini
// hisoblang.

function countWorkDays(startDate, endDate) {
  let count = 0;

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const day = date.getDay();

    if (day !== 0 && day !== 6) {
      count++;
    }
  }

  return count;
}

console.log(countWorkDays(new Date("2025-08-01"),
new Date("2025-08-10")));
