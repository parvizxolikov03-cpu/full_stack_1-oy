let n = 121;

let reversed = Number(String(n).split("").reverse().join(""));

if (n === reversed) {
    console.log("Palindrom");
} else {
    console.log("Palindrom emas");
}