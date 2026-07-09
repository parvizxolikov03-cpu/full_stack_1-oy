// 4. Berilgan sonning teskarisini hosil qiladigan function yozing.

const reverse_nums = (n) => {
    return String(n).split("").reverse().join("")
}

console.log(reverse_nums(12345))