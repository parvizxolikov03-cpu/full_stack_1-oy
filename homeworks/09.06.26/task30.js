// 30. Istalgan miqdordagi sonlarni qabul qilib, ularning
// yig'indisini hisoblaydigan funksiya yozing. Funksiya
// parametrlari uchun ...rest operatoridan foydalaning.

function sum(...nums) {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));