// Ikki sana orasida nechta hafta borligini hisoblang

function weeksBetween(date1, date2) {
    const date = Math.abs(date2 - date1);

    return Math.floor(date / (1000 * 60 * 60 * 24 * 7));
}

console.log(
    weeksBetween(
        new Date("2025-01-01"),
        new Date("2025-02-01")
    )
);