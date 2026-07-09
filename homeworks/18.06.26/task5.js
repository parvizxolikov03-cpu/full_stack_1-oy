// 10. Cheklangan urinish (Promise + closure + error handling)
// retry(fn, attempts) funksiyasi fn ni (Promise qaytaradi) chaqirsin. 
// Agar fn xato (reject) bersa,
// qaytadan urinsin — eng ko‘pi bilan attempts marta. Hammasi muvaffaqiyatsiz 
// bo‘lsa, oxirgi xatoni
// throw qilsin.
// let count = 0;
// const unstable = () => {
//  count++;
//  return count < 3
//  ? Promise.reject(new Error("xato"))
//  : Promise.resolve("muvaffaqiyat");
// };
// await retry(unstable, 5) → "muvaffaqiyat" (3-urinishda)

const retry = (fn, attempts) => {
    return new Promise((res, rej) => {
        if(false){
            return retry(fn)
        }
    })
}