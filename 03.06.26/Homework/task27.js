/*
Berilgan sonning barcha tub bo'luvchilarini toping.
*/
const n = 58
if (n == 2) console.log(2)
for (let i = 3; i <= n/2+1; i+=2){
    if (n%i === 0) console.log("tub son: ", i)
}