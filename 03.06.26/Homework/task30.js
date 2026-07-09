/*
Talabalar ma'lumotlari saqlangan object berilgan.
Misol:
{
ali: 85,
vali: 91,
sami: 77,
nodir: 91
}
Eng yuqori ball olgan barcha talabalarni toping.
*/

const students = {
    ali: 85,
    vali: 91,
    sami: 77,
    nodir: 91,
    asil: 91
}
const arr = []
const new_students = {}
for ([key, val] of Object.entries(students)){
    new_students[val] ? new_students[val] = [...new_students[val], key]  : new_students[val] = [key]
}
for ([key, val] of Object.entries(new_students)){
    arr.push([Number(key), val])
}
const max_users = arr.sort((a,b) => b[0] - a[0])[0][1]
for (name of max_users){
    console.log(name)
}