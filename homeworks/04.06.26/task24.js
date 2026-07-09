const team = {
  wins: 10,
  draws: 4,
  losses: 2,
  getPoints() {
    return `Umumiy ball: ${this.wins * 3 + this.draws * 1}`;
  },
};

console.log(team.getPoints());
