const Task3 = require('./Task3');

const power = Task3.power;
const round = Task3.round;
const ceiling = Task3.ceiling;

test('testing power', () => {
  expect(power(1, 2)).toBe(1);
});
test('testing round', () => {
  expect(round(11.1)).toBe(11);
});
test('testing ceiling', () => {
  expect(ceiling(4.1)).toBe(5);
});
