// 4. Reverse String
// Stringni teskari qilib qaytaring. reverse() metodidan foydalanmang. Misol: reverseString('hello') =>
// 'olleh'

function reverseString(s) {
    let str = ""
    let a = s.split("")
    for (let i = a.length - 1; i > -1; i--){
        str += a[i]
    }
    return str
}

console.log(reverseString("hello"));
