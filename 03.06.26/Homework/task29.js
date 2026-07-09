/*
1 dan n gacha bo'lgan sonlar ichida Armstrong sonlarni toping.
*/

let n = 500;
for (i = 1; i < n; i++){
    total = 0
    for(num of String(i)){
        total += num ** 3
    }
    total == i ? console.log(i) : NaN  
}
