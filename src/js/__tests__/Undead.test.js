import Undead from '../Undead';

test('new Undead', () => {
  const newUndead = new Undead('Нежить');
  expect(newUndead).toEqual({
    name: 'Нежить',
    level: 1,
    health: 100,
    type: 'undead',
    attack: 25,
    defence: 25,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});
