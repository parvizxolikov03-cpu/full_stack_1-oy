const movie = {
  ratings: [5, 4, 3, 5, 5, 4],
  getRating() {
    let total = 0;
    for(i of this.ratings){
        total += i;
    }
    return +(total / this.ratings.length).toFixed(2)
  }
};


console.log(movie.getRating());

