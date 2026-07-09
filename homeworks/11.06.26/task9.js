// 9. Berilgan objectning barcha property
// descriptorlarini jadval ko'rinishida chiqaring.

const user = {
    name: "Ali",
    age: 20
};

console.table(
    Object.getOwnPropertyDescriptors(user)
);