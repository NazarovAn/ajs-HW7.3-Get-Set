import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
