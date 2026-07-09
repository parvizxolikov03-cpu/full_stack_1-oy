const exam = {
  correct: 40,
  total: 50,
  getPercentage() {
    return (this.correct / this.total) * 100;
  },
};

console.log(exam.getPercentage());
