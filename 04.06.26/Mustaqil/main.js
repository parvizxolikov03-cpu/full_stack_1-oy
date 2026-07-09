// 1.
// Telefon raqami berilgan.  +998901234567
// Natija:
// +998 (90) 123-45-67   formatida chiqaring.
// let num = "+998901234567"
// console.log(`${num.slice(0,4)} (${num.slice(4,6)}) ${num.slice(6,9)}-${num.slice(9,11)}-${num.slice(11,13)}`)

// 2.
// Matn berilgan.
// Undagi eng uzun so'zni toping.

// let text = "Salom Javascript";

// console.log(text.split(" ").reduce((a, b) => a.length > b.length ? a : b))

// 3.
// Parol berilgan.
// Parolda:
// ● kamida 8 ta belgi
// ● kamida 1 ta katta harf
// ● kamida 1 ta son
// mavjudligini tekshiring.

// function checkPassword(password) {
//   if (password.length < 8) return "Xoto";
//   let str = 0;
//   let num = 0;

//   for (let i = 0; i < password.length; i++) {
//     if (!isNaN(password[i])) {
//       num++;
//     }
//     if (password[i] === password[i].toUpperCase) {
//       str++;
//     }
//   }
//   if (num > 0 && str > 0) {
//     console.log(true);
//   } else {
//     console.log("xato");
//   }
// }

// let password = "kwvsssvoijoi";
// checkPassword(password);

// const passwordVerification = (password) => {return `${password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)? "Parol tog'ri kiritildi": "Parol hatto kiritilgan"} `};

// console.log(passwordVerification("devLine7"));

// 4.
// Berilgan sonning raqamlari o'sish tartibida joylashganmi aniqlang.
// Misol:
// 123489
// → true
// 125423
// → false

// const n = 123456;

// console.log(Number(String(n).split("").sort().join("")) === n)

// 5.
// Matndagi barcha bo'shliqlar sonini hisoblang.

// const text = "Sa l om Dunyo ";

// console.log(text.split("").reduce((a, b) => b === " " ? a += 1 : a, 0))

// Son berilgan.
// Faqat birinchi va oxirgi raqamini almashtiring.
// Misol:
// 12345
// ↓
// 52341

// let n = 12345;

// arr = String(n).split("")
// let b = arr[0]
// arr[0] = arr.at(-1)
// arr[arr.length - 1] = b

// console.log(+arr.join(""));

// 8.
// Berilgan sonning barcha raqamlari har xil ekanligini tekshiring.

// let n = 12345;

// console.log(String(n).split("").length === new Set(String(n).split("")).size)

// 9.
// Matn berilgan.
// Har bir so'zning bosh harfini katta qiling.

// const text = "javascript backend developer"

// console.log(text.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join(" "))

// 10.
// Son berilgan.
// Uning kvadrat ildizi butun son chiqadimi aniqlang.

// function sqrt(n) {
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     if (i * i === n) {
//       count += i * i;
//     } else {
//       count += 0;
//     }
//   }
//   if (count === n) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(sqrt(81));

// 11.
// Email berilgan.
// Login qismini ajratib oling

// const email = "ali@gmail.com";

// console.log(email.split("@")[0])

// Matn ichidagi barcha sonlarni toping va yig'indisini hisoblang.
// Misol:
// Ali 20 yoshda va 5 yil tajribaga ega

// const text = "Ali 20 yoshda va 5 yil tajribaga ega";

// let count = 0;
// for (let i of text.split(" ")) {
//   if (!isNaN(Number(i))) {
//     count += Number(i);
//   }
// }
// console.log(count);
// console.log(text.split(" ").reduce((a, b) => !isNaN(Number(b)) ? a += Number(b) : a += 0, 0))

// 4 xonali tasodifiy OTP kod yarating.

// console.log(Math.floor(Math.random() * 9000 + 1000))

// Tasodifiy 8 belgili promo-kod yarating.
// Namuna:
// A7K9P2Q1

// let result = "";
// for (let i = 1; i <= 8; i++) {
//   if (Math.floor(Math.random() < 0.5)) {
//     result += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//   } else {
//     result += String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//   }
// }
// console.log(result);


// Ism va familiyadan login yarating.
// Misol:
// Ali Valiyev

// let text = "Ali Valiev"

// console.log(`${a[0].toLowerCase()}.${(a.split(" ")[1]).toLowerCase()}`)


// let text = "Ali Valiyev";

// console.log(text.split(" ").reduce((a,b) => a[0] + "." + b))


// Matndagi eng ko'p takrorlangan harfni toping

let text = 