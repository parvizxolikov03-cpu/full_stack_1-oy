// 15. Bank Kartasi
// Card class yarating. #cardNumber. getMaskedNumber() oxirgi 4 raqamni
// ko‘rsatsin. static generateId().

class Card {
  #cardNumber;
  static generateId() {}
  constructor(cardNumber) {
    this.#cardNumber = cardNumber;
  }

  getMaskedNumber() {
    this.#cardNumber;
    return `************${this.#cardNumber.slice(-4)}`;
  }
}

const card = new Card("4420545685459875");
console.log(card.getMaskedNumber());
