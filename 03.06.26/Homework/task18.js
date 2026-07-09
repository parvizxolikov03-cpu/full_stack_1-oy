/*
1 dan n gacha bo'lgan sonlar ichida raqamlari yig'indisi 10 ga teng bo'lgan sonlarni
toping.
*/

let n = 1000
for (let i = 19; i < n; i++){
    sum = 0
    for (num of String(i)){
        sum += num * 1
    }
    sum === 10 ? console.log(i) : NaN
}