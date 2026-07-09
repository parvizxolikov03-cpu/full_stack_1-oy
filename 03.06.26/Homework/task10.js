// 10. Object ichidagi faqat son qiymatlarni yig'indisini hisoblang.

const student = {
name: "Ali",
age: 20,
score: 95
}

let sum = 0;
for (num of Object.values(student)){
    if (parseInt(num)){
        sum += num
    }
}
console.log(sum);
