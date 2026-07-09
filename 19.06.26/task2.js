// 2 2-topshiriq: Yosh tekshiruvi (resolve / reject)
// Quyidagi funksiyani to'liq yozing — yosh 18 dan katta yoki teng bo'lsa resolve("Ruxsat
// berildi"), aks holda reject("Yosh yetarli emas") qaytarsin. Natijani .then() va
// .catch() bilan ko'rsating.

function checkAge(age) {
  return new Promise((res, rej) => {
    if (age >= 18) {
      res("Ruxsat berildi");
    } else {
      rej("Yosh yetarli emas");
    }
  });
}

checkAge(18)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
