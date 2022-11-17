const primo = require('../Funções/númeroprimo');

test('1456 não é um número primo', () => {
  expect(primo(1456)).toBe(false);
});

test('73 é um número primo', () => {
    expect(primo(73)).toBe(true);
});