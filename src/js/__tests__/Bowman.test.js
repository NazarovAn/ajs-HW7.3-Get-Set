import Bowman from '../Bowman';

test('new Bowman', () => {
  const newBowman = new Bowman('Bow');
  expect(newBowman).toEqual({
    name: 'Bow',
    level: 1,
    health: 100,
    type: 'bowman',
    attack: 25,
    defence: 25,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
