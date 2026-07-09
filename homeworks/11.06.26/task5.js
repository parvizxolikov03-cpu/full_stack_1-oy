// 5. account objectida balance property yarating
// va uni enumerable: false qiling.

function info(account){
    return Object.defineProperty(account, "balance", {
        enumerable : false
    })
}

const obj = {
    balance : 25000
}

console.log(info(obj))