let phone = "+998901234567";


let result = `${phone.slice(0, 4)} (${phone.slice(4, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`;

console.log(result);