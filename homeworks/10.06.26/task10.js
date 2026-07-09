// Tug'ilgan sana berilgan. Foydalanuvchi necha kun
// yashaganini hisoblang.

function daysLived(birthDate) {
    const date = new Date();

    const result = date - birthDate;

    return Math.floor(result / (1000 * 60 * 60 * 24));
}

console.log(daysLived(new Date("2000-01-01")));