// // 16. Talabalar ballari saqlangan object berilgan. Eng yuqori ball olgan talabani toping.

// students = {
// ali: 78,
// vali: 95,
// sami: 96
// };
// let max_ball = Math.max(...Object.values(students))
// for ([key , val] of Object.entries(students)){
//     if (val == max_ball){
//         console.log(key);
//     }

// }

// 17. Object ichidagi qiymatlar orasida takrorlangan qiymatlar mavjudligini aniqlang.

// rating = {
// a: 5,
// b: 7,
// c: 5,
// d: 9,
// e: 5
// };

// const obj = {}
// const arr = []
// for (i of Object.values(rating)){
//     obj[i]? obj[i] = obj[i] + 1 : obj[i] = 1
//     if ( obj[i] > 1 && !arr.includes(i)){
//         arr.push(i)
//     }
// }
// console.log(...arr);

// 18. 1 dan n gacha bo'lgan sonlar ichida raqamlari yig'indisi 10 ga teng bo'lgan sonlarni
// toping.

// let a = 100;
// for (let i = 0; i < a; i++) {
//   let total = 0;
//   for (const j of String(i)) {
//     total += +j;
//   }

//   if (total == 10) {
//     console.log(i);
//   }
// }

// let a = 12;

// for(let i = 0; i < a; i++){
//     if (a % i == 0){
//         console.log(i)
//     }
// }

// const getSumNumber = (n) => {
//     let count = 0;
//     for(let i of String(n)){
//         count += +i
//     }
//     return count
// }

// console.log(getSumNumber(64651))

// const obj = {
// math: 67,
// physics: 90,
// english: 7
// }

// console.log(Object.values(obj).reduce((a, b) => a + b))

// function reverseNums(nums){
//     // let str = "";
//     // while(nums > 0){
//     //     str += nums % 10
//     //     nums = Math.floor(nums / 10)
//     // }
//     // console.log(str)
//     return Number(String(nums).split("").reverse().join(""))
// }

// console.log(reverseNums(12345))

// const obj = {
// math: 85,
// physics: 90,
// english: 78
// }

// console.log(Math.max(...(Object.values(obj))))

// let n = 153;

// let count = 0;

// for(let i of String(n)){
//     count += Number(i) ** 3;
// }
// console.log(n === count ? "Armstrong" : "Armstrong emas")

// function isTub(n){
//     if (n < 2) return false
//     for(let i = 2; i * i < n; i++){
//         if(n % i == 0){
//             return false
//         }
//     }
//     return true
// }

// function getTub(n){
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         if(isTub(i)){
//             count++
//         }
//     }
//     return count
// }

// const n = 25;
// console.log(getTub(n))

// const obj = {
// math: 85,
// physics: 90,
// english: 78
// }

// console.log(Object.keys(obj).sort())

// function get(text) {
//   let count = 0;
//   let s = "aoiue";
//   for (let i of text.toLowerCase().split("")) {
//     if (s.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(get("Salom Dunyo"));


// 10. Object ichidagi faqat son qiymatlarni yig'indisini hisoblang.
// const obj = {
//   name: "Ali",
//   age: 20,
//   score: 95,
// };

// let count = 0;
// for (let i in obj) {
//   if (typeof obj[i] === "number") {
//     count += obj[i];
//   }
// }
// console.log(count);

// 12. Object ichidagi eng uzun string qiymatni toping
// const obj ={
//     name : "Ali",
//     city : "Tashkent"
// }

// console.log(Object.values(obj).reduce((a, b) => a.length > b.length ? a : b))


// 14. Ikki object berilgan. Qaysi objectda ko'proq property borligini aniqlang.
// const obj = {
//     name : "Ali",
//     age : 21
// }

// const obj1 = {
//     name : "Vali",
//     age : 22,
//     city : "Tashkent"
// }

// console.log(Object.keys(obj).length > Object.keys(obj1).length ? obj : obj1)


// 16. Talabalar ballari saqlangan object berilgan. Eng yuqori ball olgan talabani toping.
// const obj = {
// ali: 78,
// vali: 950,
// sami: 888
// }

// console.log(Object.entries(obj).reduce((a, b) => a[1] > b[1] ? a : b)[0])

// 17. Object ichidagi qiymatlar orasida takrorlangan qiymatlar mavjudligini aniqlang.
// const obj = {
// ali: 78,
// vali: 950,
// sami: 888,
// anonim : 78
// }

// console.log(Object.values(obj).length === new Set(Object.values(obj)).size)


// 18. 1 dan n gacha bo'lgan sonlar ichida raqamlari yig'indisi 10 ga teng bo'lgan sonlarni
// toping.
// const n = 100;

// for(let i = 19; i < n; i++){
//     let num = i;
//     let sum = 0; 
//     while(num){
//         sum += num % 10
//         num = num / 10 
//         num -= num % 1
//     }
//     if(sum === 10){
//         console.log(i)
//     }
// }


// 19. Berilgan son mukammal son ekanligini aniqlaydigan function yozing.
// const n = 6;

// let sum = 0;
// for(let i = 1; i < n; i++){
//     if(n % i == 0){
//         sum += i
//     }
// }
// console.log(sum === n ? "Mukammal" : "Mukammal emas")

// 20. Object ichidagi barcha string qiymatlarni bitta stringga birlashtiring.
// const obj ={
// number : 1,
// name: "Ali",
// age: 20,
// score: 95, 
// city : "Tashkent"
// }

// console.log(Object.values(obj).reduce((result = "" , item) => typeof item === "string" ? result += item : result))


// 22. Object ichida eng ko'p uchraydigan qiymatni toping.
// const obj = {
// a: 5,
// b: 7,
// c: 7,
// d: 9,
// e: 7
// }

// const map = new Map()
// for(let i of Object.values(obj)){
//     if(map.has(i)){
//         map.set(i, map.get(i) + 1)
//     } else{
//         map.set(i, 1)
//     }
// }
// const max = new Map()
// max.set("harf" , 0)
//     .set("count", 0)
// for(let [key, val] of map){
//     if(val > max.get("count")){
//         max.set("harf", key)
//             .set("count", val)
//     }
// }


// console.log(max)

// 23. n soni berilgan. Quyidagi shaklni hosil qiling:

// const n = 5;

// for (let i = 1; i < n+1; i++){
//     let str = ""
//     for (let j = 1; j < i+1; j++){
//         str += j
//     }
//     console.log(str)
// }

// 24. Object ichidagi barcha kalit nomlari uzunliklari yig'indisini toping.

// const obj = {
// ali: 78,
// vali: 95,
// sami: 88
// }

// console.log(Object.keys(obj).join("").length)

// 25. Berilgan son palindrom son ekanligini string metodlarisiz aniqlang.

// let n = 132231;
// let a = n;
// let result = 0
// while(a){
//     result = result * 10 + a % 10
//     a = a / 10 
//     a -= a % 1
// }
// console.log(n === result)

// let str = ""
// while(n > 0){
//     str += n % 10
//     n = Math.floor(n / 10)
// }
// console.log(a === Number(str))


// 26. Ikki object berilgan. Ularning umumiy kalitlarini toping.

// const obj = {
//     name : "Ali",
//     age : 21
// }

// const obj1 = {
//     name : "Vali",
//     city : "Tashkent"
// }
// const arr = Object.keys(obj)
// for (let i of Object.keys(obj1)){
//     if(arr.includes(i)){
//         console.log(i)
//     }
// }

