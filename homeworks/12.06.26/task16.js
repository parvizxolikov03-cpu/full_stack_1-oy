// 16. Kino tizimi 
// Movie 
// ↓ 
// Series 
// Property: 
// episodes 
// Umumiy davomiylikni hisoblang. 
// Bonus masalalar (bularni bajarish uchun fantaziya 
// ishlatasiz) 

class Movie {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration; 
    }
}

class Series extends Movie {
    constructor(title, duration, episodes) {
        super(title, duration);
        this.episodes = episodes;
    }

    calculateTotalDuration() {
        return this.duration * this.episodes;
    }
}

const series = new Series("Breaking Bad", 45, 62);

console.log(
    `Umumiy davomiylik: ${series.calculateTotalDuration()} daqiqa`
);