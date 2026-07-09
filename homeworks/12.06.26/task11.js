// 11. O'yin tizimi
// Character
// ↓
// Warrior
// Property:
// attackPower
// Zarar miqdorini hisoblovchi metod yozing.

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Warrior extends Character {
  constructor(name, health, attackPower) {
    super(name, health);
    this.attackPower = attackPower;
  }

  calculateDamage() {
    console.log(`${this.name} zarari: ${this.attackPower}`);
  }
}

const warrior = new Warrior("Thor", 100, 50);
warrior.calculateDamage()