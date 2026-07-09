let year = 2024;

if (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
) {
    console.log("Kabisa yili");
} else {
    console.log("Oddiy yil");
}