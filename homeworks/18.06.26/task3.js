// 8. Navbatli bajarish (Promise + async/await + timers)
// runSequentially(tasks) — tasks bu funksiyalar massivi, har biri Promise qaytaradi. 
// Ularni ketma-ket (biri tugagach keyingisi) bajarib, natijalar massivini qaytarsin.

// await runSequentially(tasks) → [1, 2, 3]
// Muhim: Promise.all ishlatmang — maqsad ketma-ketlikni tushunish.


async function runSequentially(tasks){
    return 
}




const tasks = [
 () => new Promise(r => setTimeout(() => r(1), 3000)),
 () => new Promise(r => setTimeout(() => r(2), 1000)),
 () => new Promise(r => setTimeout(() => r(3), 2000)),
];

