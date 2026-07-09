// 9. Obyektni “tekislash” (objects + recursion + destructure)
// flatten(obj) ichma-ich joylashgan obyektni bir qavatli qilsin, kalitlarni
// nuqta bilan birlashtirsin.flatten({ a: 1, b: { c: 2, d: { e: 3 } } })
// // → { "a": 1, "b.c": 2, "b.d.e": 3 }
// Cheklov: qiymatlar faqat son yoki obyekt bo‘ladi (massiv yo‘q).

function flatten(obj) {
    for (let [key, val] of Object.entries(obj)){
        
    }
}



const obj = flatten({ a: 1, b: { c: 2, d: { e: 3 } } });
console.log(flatten(obj))