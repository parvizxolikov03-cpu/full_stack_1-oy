// Berilgan sanadan keyingi dushanba kunini toping.


function nextMonday(date) {
    const result = new Date(date);

    const daysToMonday = (8 - result.getDay()) % 7 || 7;

    result.setDate(result.getDate() + daysToMonday);

    return result;
}

console.log(nextMonday(new Date("2025-08-20")));