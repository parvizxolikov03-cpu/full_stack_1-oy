const store = {
income: 1200000,
expense: 850000,
getProfit(){
    return this.income - this.expense
}
};


console.log(store.getProfit());
