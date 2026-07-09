// Juft sonlar Oson
// Massivdan faqat juft sonlarni yangi massivga ajratib oling. Misol: [1,2,3,4,5,6] -> [2,4,6]

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.filter(el => el % 2 == 0))