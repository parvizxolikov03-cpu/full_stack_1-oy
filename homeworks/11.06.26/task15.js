// 15. Bank account objecti yarating.
// Propertylar:
// accountNumber
// owner
// balance
// accountNumber:
// ● writable: false
// ● configurable: false
// bo'lishi kerak.

function getInfo(acc){
    return Object.defineProperty(acc, "accountNumber",{
        writable : false,
        configurable : false
    })
}



const account = {
    accountNumber : 5666665,
    owner : "bank",
    balance : 50000
}


console.log(getInfo(account))
delete account.accountNumber
console.log(account)