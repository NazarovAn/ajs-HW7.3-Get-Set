import Zombie from '../Zombie';

test('new Zombie', () => {
  const newZombie = new Zombie('Зомби');
  expect(newZombie).toEqual({
    name: 'Зомби',
    level: 1,
    health: 100,
    type: 'zombie',
    attack: 40,
    defence: 10,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
