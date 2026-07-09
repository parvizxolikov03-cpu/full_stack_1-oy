let password = "";

for (let i = 0; i < 12; i++) {
    password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(password);