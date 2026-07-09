// Berilgan yilning oxirgi kuni haftaning qaysi kuniga to'g'ri
// kelganini toping.
function lastDayOfYear(year) {
    const days = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
    ];

    const date = new Date(year, 11, 31);

    return days[date.getDay()];
}

console.log(lastDayOfYear(2026));