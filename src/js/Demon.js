import Character from './Character';

export default class Demon extends Character {
  constructor(name) {
    super(name);
    this.type = 'demon';
    this.attack = 10;
    this.defence = 40;
  }
}
