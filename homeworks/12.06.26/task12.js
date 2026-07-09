// 12. RPG Game
// Character
// ↓
// Mage
// Property:
// mana
// spellPower
// Sehr zarari hisoblovchi metod yozing.

class Character {
  constructor(name) {
    this.name = name;
  }
}

class Mage extends Character {
  constructor(name, mana, spellPower) {
    super(name);
    this.mana = mana;
    this.spellPower = spellPower;
  }

  calculateSpellDamage() {
    return this.mana * this.spellPower;
  }
}

const mage = new Mage("Gandalf", 50, 10);

console.log(`Sehr zarari: ${mage.calculateSpellDamage()}`);
