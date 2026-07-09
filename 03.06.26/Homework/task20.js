/*
Object ichidagi barcha string qiymatlarni bitta stringga birlashtiring.
*/

const products = {
    1: "olma",
    2: "banan",
    3: "nok",
    4: "uzum",
    5: "ananas",
    6: "mandarin"
}
console.log(Object.values(products).join(" "))