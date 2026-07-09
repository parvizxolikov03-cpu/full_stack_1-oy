// 2.rectangle object yarating.
// Propertylar:
// width
// height
// area getter yozing.

const rectangle = {
  width: 10,
  height: 5,

  get area() {
    return this.width * this.height;
  }
};

console.log(rectangle.area); 