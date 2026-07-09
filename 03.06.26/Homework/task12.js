// 12. Object ichidagi eng uzun string qiymatni toping

const student = {
name: "Ali",
age: 20,
score: 95
};
const arr = [];
for (s of Object.keys(student)){
    arr.push([s.length,s]) 

}
console.log(arr.sort((a,b)=> b[0] - a[0])[0][1]);

