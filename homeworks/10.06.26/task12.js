// Berilgan yilning birinchi kuni haftaning qaysi kuniga to'g'ri
// kelganini toping.

function firstDayOfYear(year) {
    const days = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
    ];

    const date = new Date(year, 0, 1);

    return days[date.getDay()];
}

console.log(firstDayOfYear(2026));
