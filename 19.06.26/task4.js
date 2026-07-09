// 4 4-topshiriq: Musbat son va xatolik
// Ixtiyoriy son bilan ishlaydigan async funksiya yozing: agar son musbat bo'lsa — uning
// kvadratini qaytarsin, aks holda throw new Error("Son manfiy"). Xatolikni try/catch
// bilan ushlab, foydalanuvchiga tushunarli xabar chiqaring.

async function kvadrat(n) {
  try {
    if (n > 0) {
      return n ** 2;
    } else {
      throw new Error("Son manfiy");
    }
  } catch (err) {
    console.log(err);
  }
  return n
}

console.log(kvadrat(6))