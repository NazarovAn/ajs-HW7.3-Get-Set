import Swordsman from '../Swordsman';

test('new Swordsman', () => {
  const newSwordsman = new Swordsman('Sword');
  expect(newSwordsman).toEqual({
    name: 'Sword',
    level: 1,
    health: 100,
    type: 'swordsman',
    attack: 40,
    defence: 10,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
