// 2-topshiriq: Foydalanuvchi autentifikatsiyasi
// Shartlar:
// •  loginUser(username, password) funksiyasi Promise qaytarsin.
// •  Funksiya ichida setTimeout bilan 2 soniyalik kechikish hosil qilinsin.
// •  Agar username "admin" va password "1234" bo'lsa, resolve({status: "ok", user:
// username}) chaqirilsin.
// •  Aks holda reject("Login yoki parol xato") chaqirilsin.
// •  Promise natijasi .then() da obyekt ko'rinishida konsolga chiqarilsin.
// •  .catch() orqali xatolik matni chiqarilsin.
// •  Funksiya 2 marta turli parametrlar bilan chaqirilib, ikkala holat (muvaffaqiyat va xato)
// sinab ko'rilsin.

function loginUser(userName, password) {
  return new Promise((res, rej) => {
    if (userName === "admin" && password === "1234") {
      setTimeout(() => res({ status: "ok", user: userName }));
    } else {
      rej("Login yoki parol xato");
    }
  });
}
loginUser("admin", "1235")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
