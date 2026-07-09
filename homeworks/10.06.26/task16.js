// Joriy oy tugashigacha necha kun qolganini aniqlang.

function daysintoMonth() {
    const today = new Date();

    const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
    );

    const date = lastDay - today;

    return Math.floor(date / (1000 * 60 * 60 * 24));
}

console.log(daysintoMonth());