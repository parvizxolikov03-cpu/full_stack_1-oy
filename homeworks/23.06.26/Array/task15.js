// Ikki massivni birlashtir O'rta
// Ikkita saralangan massivni bitta saralangan massivga birlashtiring. Misol: ([1,3],[2,4]) ->
// [1,2,3,4].

const arr1 = [1, 3]
const arr2 = [2, 4]

console.log(arr1.concat(arr2).sort((a, b) => a - b))