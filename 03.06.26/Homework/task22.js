/*
Object ichida eng ko'p uchraydigan qiymatni toping.
Misol:

{
a: 5,
b: 7,
c: 5,
d: 9,
e: 5
}

Natija: 5
*/

const objects = {
    a: 5,
    b: 7,
    c: 5,
    d: 9,
    e: 5
}
const new_objects = {}
const arr = []
for(val of Object.values(objects)){
    new_objects[val] ? new_objects[val] = new_objects[val] + 1 : new_objects[val] = 1
}
for ([key, val] of Object.entries(new_objects)){
    arr.push([val, key])
}
console.log(arr.sort((a,b) => b[0] - a[0])[0][1])