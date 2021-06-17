const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);
   
    this.weapon = weapon;
    this.potion = new Potion();

  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  };


  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };
}

module.exports = Enemy;
