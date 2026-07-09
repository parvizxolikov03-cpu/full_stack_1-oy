// 4. Arraydagi har bir sonning juft yoki toqligini ko'rsatadigan
// yangi array yarating.

const arr = [1, 3, 2, 5, 7, 4];

const new_arr = arr.map(function (a) {
  if (a % 2) {
    return "Toq";
  } else {
    return "Juft";
  }
});

console.log(new_arr);
