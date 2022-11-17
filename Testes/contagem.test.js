const contagem = require('../Funções/contagem');

test('A contagem de números até 45.60 deve ser 60', () => {
  expect(contagem(50.55)).toBe(50);
});
test('A contagem de números até 30.55 deve ser 30', () => {
    expect(contagem(0)).toBe(0);
  });