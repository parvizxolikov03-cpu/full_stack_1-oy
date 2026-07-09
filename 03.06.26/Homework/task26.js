/*
Ikki object berilgan. Ularning umumiy kalitlarini toping.
*/

const student_1 = {
    ali: 85,
    vali: 91,
    sami: 77,
    toshmat: 40,
    odil: 35,
    nodir: 91,
    eshmat: 10
}
const student_2 = {
    ali: 85,
    vali: 91,
    sami: 77,
    jahongir: 78,
    botir: 60,
    nodir: 91,
    kamol: 100
}
const arr = Object.keys(student_2)
for (key of Object.keys(student_1)){
    arr.includes(key) ? console.log(key) : NaN
}