// Joriy vaqt ertalab, kunduzi, kechqurun yoki tunda
// ekanligini aniqlang

function dayPeriod() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        return "Ertalab";
    } else if (hour >= 12 && hour < 18) {
        return "Kunduzi";
    } else if (hour >= 18 && hour < 22) {
        return "Kechqurun";
    } else {
        return "Tunda";
    }
}

console.log(dayPeriod());