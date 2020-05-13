import Bowman from './Bowman';

const newTest = new Bowman('Tested');

/* eslint no-console: ["error", { allow: ["log"] }] */
console.log(newTest);

newTest.newTurn();
console.log(newTest);
newTest.powerMode = true;

newTest.newTurn();
console.log(newTest);
newTest.powerMode = true;

newTest.newTurn();
console.log(newTest);

newTest.newTurn();
console.log(newTest);

newTest.newTurn();
console.log(newTest);

newTest.newTurn();
console.log(newTest);
