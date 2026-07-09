// Berilgan sanadan oldingi juma kunini toping.

function previousFriday(date) {
    const result = new Date(date);

    const daysToFriday = (result.getDay() + 2) % 7 || 7;

    result.setDate(result.getDate() - daysToFriday);

    return result;
}

console.log(previousFriday(new Date("2025-08-20")));