let son = Math.floor(Math.random() * 100) + 1;

let tub = son > 1;

for (let i = 2; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
        tub = false;
        break;
    }
}

console.log(son);
console.log(tub);