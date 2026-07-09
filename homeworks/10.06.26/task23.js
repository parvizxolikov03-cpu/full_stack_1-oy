// Mahsulot ishlab chiqarilgan sana berilgan. U ishlab
// chiqarilganiga necha oy bo'lganini hisoblang.

function monthsPassed(date) {
    const today = new Date();

    return (
        (today.getFullYear() - date.getFullYear()) * 12 +
        (today.getMonth() - date.getMonth())
    );
}

console.log(monthsPassed(new Date("2025-01-15")));