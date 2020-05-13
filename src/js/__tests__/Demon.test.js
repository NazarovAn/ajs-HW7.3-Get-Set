import Demon from '../Demon';

test('new Zombie', () => {
  const newDemon = new Demon('Демон');
  expect(newDemon).toEqual({
    name: 'Демон',
    level: 1,
    health: 100,
    type: 'demon',
    attack: 10,
    defence: 40,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
