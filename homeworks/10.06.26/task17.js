// Tug'ilgan sana berilgan. Keyingi tug'ilgan kungacha necha
// kun qolganini hisoblang.

function daysUntilBirthday(birthDate) {
  const today = new Date();

  let birthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  return Math.ceil((birthday - today) / 86400000);
}
