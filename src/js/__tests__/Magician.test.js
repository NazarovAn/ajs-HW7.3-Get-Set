import Magician from '../Magician';

test('new Magician', () => {
  const newMagician = new Magician('Mage');
  expect(newMagician).toEqual({
    name: 'Mage',
    level: 1,
    health: 100,
    type: 'magician',
    attack: 10,
    defence: 40,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
