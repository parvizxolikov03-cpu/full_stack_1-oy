/*
 n soni berilgan. Quyidagi shaklni hosil qiling:
1
12
123
1234
12345
*/

let n = +prompt("enter num: ")
for (let i = 1; i <= n; i++){
    nums = ""
    for(let j = 1; j <= i; j++)nums += j
    console.log(nums)
}
