// 1. Foydalanuvchining ismini saqlovchi o'zgaruvchi yarating va konsolga chiqaring
//let a = "Shoxrux";
// console.log(a);

// 2. Yoshingizni saqlovchi o'zgaruvchi yarating va qiymatini chiqaring.
//let a = 25;
// console.log(a);

// 3. Berilgan ikki sonning yig'indisini hisoblang.
//let a = 25;
//let b = 20;
// console.log(a+b);

// 4. Berilgan sonning kvadratini hisoblang.
// let a = 5;
// console.log(a ** 2);

// 5. Berilgan son juft yoki toq ekanligini aniqlang.
// let a = 25;
// console.log(a % 2 == 0);

// 6. Berilgan son musbat, manfiy yoki nol ekanligini aniqlang.
// let a = 0;
// if (a > 0) {
//   console.log("juft");
// } else if (a < 0) {
//   console.log("toq");
// } else {
//   console.log("nol");
// };

// 7. Ikki son berilgan. Kattasini ekranga chiqaring
// let a = 5;
// let b = 7;
// console.log(Math.max(a,b));

// 8. Uchta son berilgan. Eng kattasini aniqlang.
//let a = 4;
//let b = 3;
//let c = 6;
// if (a < b > c) {
//   console.log(b);
// } else if (b < a > c) {
//   console.log(a);
// } else {
//   console.log(c);
// };

// 9. String turidagi qiymatning uzunligini toping.
// let a = "Salom";
// console.log(a.length);

// 10. Berilgan qiymatning data type turini aniqlang.
// let a = true;
// console.log(typeof a);

// 11. Foydalanuvchining yoshi berilgan. Agar 18 yoshga to'lgan bo'lsa, 'Voyaga yetgan' deb
// chiqaring.
// let a = 21;
// if (a > 18){
//     console.log("Voyaga etgan");
// };

// 12. Berilgan son 3 ga bo'linadimi yoki yo'qligini aniqlang.
// let a = 18;
// if (a % 3 == 0){
//     console.log("Bo'linadi");
// } else {
//     console.log("Bo'linmaydi");
// };

// 13. Berilgan son 5 ga va 7 ga bir vaqtda bo'linadimi yoki yo'qligini aniqlang.
// let a = 35;
// if (a % 5 == 0 && a % 7 == 0){
//     console.log("Ha");
// } else {
//     console.log("Yo'q");
// };

// 14. Ikki string qiymatni birlashtirib, bitta jumla hosil qiling.
// let a = "Salom ";
// let b = "Dunyo";
// console.log(a + b);

// 15. Berilgan baho (0-100) asosida A, B, C, D yoki F natijasini chiqaring.
// let a = 55;
// if (0 < a && a < 20){
//     console.log("A");
// } else if (20 < a && a < 40){
//     console.log("B");
// } else if (40 < a && a < 60){
//     console.log("C");
// } else if(60 < a && a < 80){
//     console.log("D");
// } else if(80 < a && a < 100){
//     console.log("F");
// };

// 16. Hafta kuni raqami (1-7) berilgan. switch yordamida kun nomini chiqaring
// let a = 5;
// switch(a){
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Xato raqam")
// };

// Oy raqami (1-12) berilgan. switch yordamida oy nomini chiqaring.

// let user = 14;
// switch (user) {
//   case 1:
//     console.log("Yanvar");
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Iyun");
//     break;
//   case 7:
//     console.log("Iyul");
//     break;
//   case 8:
//     console.log("Avgust");
//     break;
//   case 9:
//     console.log("Sentabr");
//     break;
//   case 10:
//     console.log("Oktabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("Kiritilgan sondagi oy mavjud emas");
// };

// 18. Login va parol berilgan. To'g'ri bo'lsa tizimga kirishga ruxsat bering.
// const log = "qwerty"
// const parol = "1234"

// let user_log = "qwerty"
// let user_parol = "1234"

// if (log === user_log && parol === user_parol){
//     console.log("Muvaffaqiyatli kirdingiz")
// } else {
//     console.log("Login yoki parol xato");
// };

// 19. Ternary operator yordamida son musbat yoki manfiy ekanligini aniqlang.

// let a = 5;
// a > 0 ? console.log("Musbat") : a < 0 ? console.log("Manfiy") : console.log("0");

// 20. Ternary operator yordamida son juft yoki toq ekanligini aniqlang

// let a = 4;
// a % 2 == 0 ? console.log("Juft") : console.log("Toq");

// 21. Berilgan yil kabisa yili ekanligini aniqlang.
// let yil = 2026;

// if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)){
//     console.log("Kabisa");
// } else {
//     console.log("Kabisa emas");
// };

// 22. Uchburchakning uchta tomoni berilgan. Uchburchak mavjud yoki mavjud emasligini tekshiring.
// let a = 7;
// let b = 10;
// let c = 5;
// if ((a + b > c) && (a + c > b) && (b + c > a)) {
//     console.log("Uchburchak");
// } else {
//     console.log("Uchburchak emas");
// };

// 23. Ikki son va amal (+, -, *, /) berilgan. switch yordamida natijani hisoblang.

// let a = 6;
// let b = 3;
// let c = "/";
// switch(c){
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     default:
//         console.log("Xato belgi");
// };

// 24. Berilgan son 1 dan 100 gacha oraliqda ekanligini tekshiring.

// let a = 80;

// if (0 < a && a < 100){
//     console.log("Oraliqda");
// } else {
//     console.log("Oraliqda emas");
// };

// 25. Foydalanuvchining roli ('admin', 'teacher', 'student') berilgan. Mos xabar chiqaring

// let role = "teacher"

// if (role === "admin"){
//     console.log("admin");
// } else if(role === "teacher"){
//     console.log("teacher");
// } else if (role === "student"){
//     console.log("student");
// } else {
//     console.log("Xato");
// };

// 26. Berilgan uchta son ichida nechta musbat son borligini aniqlang.
// let a = 5;
// let b = -2;
// let c = 8;
// cnt = 0;
// if (a > 0) {
//   cnt += 1;
// }
// if (b > 0) {
//   cnt += 1;
// }
// if (c > 0) {
//   cnt += 1;
// }
// console.log(cnt);

// 27. Berilgan son 2 ga ham, 3 ga ham, 5 ga ham bo'linadimi yoki yo'qligini aniqlang.

// let a = 65;

// if (a % 2 == 0 && a % 3 == 0 && a % 5 == 0){
//     console.log("Bo'linadi");
// } else {
//     console.log("Bo'linmaydi");
// };

// 28. Ikki yil berilgan. Qaysi biri kattaroq ekanligini aniqlang.

// let a = 2021;
// let b = 2023;
// if(a > b){
//     console.log(`${a} yili katta`);
// } else{
//     console.log(`${b} yili katta`);
// };


// 29. Mahsulot narxi va chegirma foizi berilgan. Yakuniy narxni hisoblang.

// narx = 50000;
// chegirma = 20;

// console.log(narx * (100 - chegirma) / 100)


// 30. Foydalanuvchi yoshi va talaba ekanligi berilgan. Agar yoshi 25 dan kichik va talaba bo'lsa,
// chegirma berilsin.

// age = 25;
// status = "talaba";

// if(age < 25 && status === "talaba"){
//     console.log("Chegirma berildi");
// } else {
//     console.log("Talaba emas");
// }