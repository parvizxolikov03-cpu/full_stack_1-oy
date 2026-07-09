// 13. O‘yinchi Profili
// Player class yarating. #score. addScore(points), resetScore(). 


class Player{
    #score = 0;
    
    addScore(points){
        this.#score += points;
    }
    resetScore(){
        this.#score = 0;
    }
}

const player = new Player()
player.addScore(50)
player.addScore(80)
player.addScore(60)