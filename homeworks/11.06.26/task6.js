// 6. user objectiga birdaniga 3 ta propertyni
// Object.defineProperties() yordamida qo'shing.

function addVal(user) {
  return Object.defineProperties(user, {
    Ali: {
      value: 20,
      enumerable: true,
    },
    Vali: {
      value: 30,
      enumerable: true,
    },
  });
}

const obj = {
  Aziz: 22,
};

console.log(addVal(obj));
