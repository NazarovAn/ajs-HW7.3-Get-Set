export default class Character {
  constructor(name) {
    if (name === undefined) {
      throw new Error('name undefiend');
    } if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно содержать от двух до десяти символов');
    }
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.powerModeUsed = false;
    this.powerModeTurns = 0;
    this.turnsCounter = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  newTurn() {
    this.turnsCounter += 1;
    if (this.powerModeUsed && this.powerModeTurns >= 0) {
      this.powerModeTurns -= 1;
      if (this.powerModeTurns === -1) {
        this.health /= 2;
        this.attack /= 2;
        this.defence /= 2;
      }
    }
  }

  set powerMode(powerModeOn) {
    if (!this.powerModeUsed && powerModeOn) {
      this.powerModeUsed = true;
      this.powerModeTurns = 3;
      return this.powerMode;
    }
    throw new Error('Power mode already used');
  }

  get powerMode() {
    let traits = {
      health: this.health,
      defence: this.defence,
      attack: this.attack,
    };

    if (this.powerModeTurns !== 0) {
      traits = {
        health: this.health *= 2,
        defence: this.defence *= 2,
        attack: this.attack *= 2,
      };
    }
    return traits;
  }
}
