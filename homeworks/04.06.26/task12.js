let a = "Ali 20 yoshda va 5 yil tajribaga ega";

let sum = 0;

for (let word of a.split(" ")) {
    if (!isNaN(word)) {
        sum += Number(word);
    }
}

console.log(sum);