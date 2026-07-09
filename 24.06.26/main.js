// O'rtacha qiymat
// Massivdagi sonlarning o'rtacha arifmetigini hisoblang. Misol: [4,8,12] -> 8.
// const arr = [4, 8, 12]
// console.log(arr.reduce((a, b) => (a + b) / arr.length))

// Takrorlanmas elementlar
// Takroriy qiymatlarni olib tashlang. Misol: [1,2,2,3,3,3] -> [1,2,3].
// const arr = [1,2,2,3,3,3];
// console.log([...new Set(arr)])

// Ikkinchi katta son
// Ikkinchi eng katta sonni toping. Misol: [10,5,8,10] -> 8.
// const arr = [10, 5, 8, 10];
// console.log([...new Set(arr)].sort((a, b) => b - a)[1])

// Saralash (o'sish)
// sort() ishlatmasdan sonlarni o'sish tartibida saralang. Misol: [3,1,2] -> [1,2,3].

// var isPowerOfTwo = function (n) {
//     let count = 1
//     if (n == 1) {
//         return true
//     }
//     while(true){
//         count *= 2
//         if(count == n)return true

//         if(count > n) return false

//     }

// };

// console.log(isPowerOfTwo(3))

var intersection = function (nums1, nums2) {
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));
