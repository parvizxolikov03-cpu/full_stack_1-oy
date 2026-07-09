/*
Talabalar ballari saqlangan object berilgan. Eng yuqori ball olgan talabani toping.
Misol:
{
ali: 78,
vali: 95,
sami: 88
}

Natija:
vali
*/

const students = {
    ali: 78,
    vali: 95,
    sami: 88
}
const max_score = []
for (let [key, value] of Object.entries(students)) {
    max_score.push([value, key])
}
console.log(max_score.sort((a,b) => b[0] - a[0])[0][1])