const product = {
    name: "Mouse",
    quantity: 17,
    isAvailable(count){
        return this.quantity >= count;
    }
}

console.log(product.isAvailable(17))