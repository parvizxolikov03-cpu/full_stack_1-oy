//  Ikki sana orasidagi kunlar sonini hisoblang.

function daysBetween(date1, date2) {
    const date = Math.abs(date2 - date1);

    return date / (1000 * 60 * 60 * 24);
}


const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-10");


console.log(daysBetween(date1, date2)); 