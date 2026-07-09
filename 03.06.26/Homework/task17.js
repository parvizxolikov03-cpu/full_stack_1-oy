/*
Object ichidagi qiymatlar orasida takrorlangan qiymatlar mavjudligini aniqlang.
*/

const products = {
    1: "olma",
    2: "banan",
    3: "nok",
    7: "nok",
    4: "uzum",
    5: "ananas",
    8: "ananas",
    6: "mandarin"
}

const new_products = {}
for (product of Object.values(products)){
    new_products[product] ? new_products[product] = new_products[product] + 1 : new_products[product] = 1
    new_products[product] > 1 ? console.log(product) : NaN
}