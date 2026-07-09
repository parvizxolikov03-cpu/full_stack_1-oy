// Berilgan sana dam olish kunimi yoki ish kunimi aniqlang

function isWeekend(date) {
    const day = date.getDay();

    return day === 0 || day === 6;
}

console.log(isWeekend(new Date("2025-08-23"))); 
console.log(isWeekend(new Date("2025-08-20"))); 