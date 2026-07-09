// Berilgan oy va yil uchun kalendar hosil qiling

function calendar(year, month) {
    const days = new Date(year, month, 0).getDate();

    for (let i = 1; i <= days; i++) {
        console.log(i);
    }
}

calendar(2025, 8);