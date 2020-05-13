import Character from '../Character';
import Bowman from '../Bowman';

test('new Character', () => {
  const newCharacter = new Character('Пустой');
  expect(newCharacter).toEqual({
    name: 'Пустой',
    level: 1,
    health: 100,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});

test('no name Character', () => {
  const newCharacter = () => new Character();
  expect(newCharacter).toThrow(new Error('name undefiend'));
});

test('too short name', () => {
  const newCharacter = () => new Character('a');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов'));
});

test('too long name', () => {
  const newCharacter = () => new Character('AaaaaAaaaaA');
  expect(newCharacter).toThrow(new Error('Имя персонажа должно содержать от двух до десяти символов'));
});

test('levelUp dead Character', () => {
  const newCharacter = new Character('hollow');
  newCharacter.health = 0;
  const levelUp = () => newCharacter.levelUp();
  expect(levelUp).toThrow(new Error('Нельзя повысить левел умершего'));
});

test('levelUp Character', () => {
  const newCharacter = new Character('hollow');
  newCharacter.attack = 25;
  newCharacter.defence = 25;
  newCharacter.type = 'hollow';
  newCharacter.levelUp();
  expect(newCharacter).toEqual({
    name: 'hollow',
    level: 2,
    health: 100,
    type: 'hollow',
    attack: 30,
    defence: 30,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 0,
  });
});


//
//
//
//
//
// Тесты для задания 7.3

describe('Character newTurn', () => test.each([
  ['1', 1, {
    name: 'Пустой',
    level: 1,
    health: 100,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 1,
  }],
  ['4', 4, {
    name: 'Пустой',
    level: 1,
    health: 100,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 4,
  }],
  ['10', 10, {
    name: 'Пустой',
    level: 1,
    health: 100,
    powerModeUsed: false,
    powerModeTurns: 0,
    turnsCounter: 10,
  }],
])(
  ('turn number %s'),
  (level, amount, result) => {
    const newChar = new Character('Пустой');
    let counter = 0;
    const doTest = () => {
      if (counter !== amount) {
        newChar.newTurn();
        counter += 1;
        return doTest();
      }

      return 'ok';
    };

    doTest();

    expect(newChar).toEqual(result);
  },
));

describe('Character newTurn powerMode on', () => test.each([
  ['1', 1, {
    name: 'Пустой',
    type: 'bowman',
    attack: 50,
    defence: 50,
    level: 1,
    health: 200,
    powerModeUsed: true,
    powerModeTurns: 2,
    turnsCounter: 1,
  }],
  ['3', 3, {
    name: 'Пустой',
    type: 'bowman',
    attack: 50,
    defence: 50,
    level: 1,
    health: 200,
    powerModeUsed: true,
    powerModeTurns: 0,
    turnsCounter: 3,
  }],
  ['10', 10, {
    name: 'Пустой',
    type: 'bowman',
    attack: 25,
    defence: 25,
    level: 1,
    health: 100,
    powerModeUsed: true,
    powerModeTurns: -1,
    turnsCounter: 10,
  }],
])(
  ('turn number %s'),
  (level, amount, result) => {
    const newChar = new Bowman('Пустой');
    newChar.powerMode = true;
    let counter = 0;
    const doTest = () => {
      if (counter !== amount) {
        newChar.newTurn();
        counter += 1;
        return doTest();
      }

      return 'ok';
    };

    doTest();

    expect(newChar).toEqual(result);
  },
));

test('reuse powerMode', () => {
  const newCharacter = new Character('hollow');
  newCharacter.powerMode = true;
  expect(() => { newCharacter.powerMode = true; }).toThrow(new Error('Power mode already used'));
});
