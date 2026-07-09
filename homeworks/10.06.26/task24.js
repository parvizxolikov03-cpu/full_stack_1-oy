// Foydalanuvchi tug'ilgan sana va hozirgi sana asosida:
// ● yoshini,
// ● yashagan kunlarini,
// ● yashagan oylarini,
// ● yashagan yillarini hisoblang.

function calculateAge(birthDate) {
  const today = new Date();

  const years = today.getFullYear() - birthDate.getFullYear();

  const months =
    (today.getFullYear() - birthDate.getFullYear()) * 12 +
    (today.getMonth() - birthDate.getMonth());

  const days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    days,
  };
}

console.log(calculateAge(new Date("2000-01-15")));
