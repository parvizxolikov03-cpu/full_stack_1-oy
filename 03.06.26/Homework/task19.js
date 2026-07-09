/*
 Berilgan son mukammal son ekanligini aniqlaydigan function yozing.
*/

function perfect_numbers(){
    total = 0
    for (let i = 1; i <= num/2; i++){
        if (!(num%i)) total += i
    }
    return num == total
}
let num = 29
console.log(perfect_numbers(num))