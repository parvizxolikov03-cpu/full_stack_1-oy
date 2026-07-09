//  Berilgan oyda nechta yakshanba borligini hisoblang.

function countSundays(year, month) {
    let count = 0;

    const daysInMonth = new Date(year, month, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);

        if (date.getDay() === 0) {
            count++;
        }
    }

    return count;
}

console.log(countSundays(2025, 8));