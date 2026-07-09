// 3. Arraydagi takrorlangan elementlarni olib tashlab yangi array
// hosil qiling.

const arr = [1, 2, 2, 3, 4, 5, 3];

const newArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
});

console.log(newArr);