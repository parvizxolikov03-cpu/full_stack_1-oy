// 28. Quyidagi nested object berilgan
// Nested destructuring yordamida city ni ajratib oling.


const data = {
  user: {
    name: "Ali",
    address: {
      city: "Tashkent"
    }
  }
};

const { user: { address: { city } } } = data;

console.log(city);