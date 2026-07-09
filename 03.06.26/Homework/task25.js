/*
Berilgan son palindrom son ekanligini string metodlarisiz aniqlang.
*/
let n = 1221
let c = n
let m = 0;
const arr = []
while (n) {
    a = n % 10
    n = parseInt(n / 10)
    arr.push(a)
    console.log(a, n, m)
}
for (let i = arr.length-1; i > -1; i--){
    total = 1
    for (let j = 0; j < i; j++){
        total *= 10 
    }
    m += total * arr[arr.length-i-1]
    console.log("total: ", total*arr[arr.length-i-1])
}

console.log(c == m ? "palindrom" : "palindrom emas!")