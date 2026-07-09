// 1 1-topshiriq: Birinchi Promise
// new Promise() yordamida 2 soniyadan keyin "Salom, dunyo!" so'zini qaytaradigan Promise 
// yarating va .then() orqali konsolga chiqaring.

const promise =  new Promise((res, rej) => {
    setTimeout(() => {res()}, 1000);
})

promise
    .then(rej => console.log("Salom, dunyo!"))