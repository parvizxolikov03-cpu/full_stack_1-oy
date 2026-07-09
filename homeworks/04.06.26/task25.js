const course = {
  lessons: 45,
  completed: 18,
  getProgress() {
    return (this.completed / (this.lessons / 100)).toFixed(2);
  },
};

console.log(course.getProgress());
