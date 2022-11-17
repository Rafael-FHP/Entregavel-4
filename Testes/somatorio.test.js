const soma = require('../Funções/somatorio');

test('Resultado de 19 + 30 + 20 = 69', () => {
  expect(soma([19,30,20])).toBe(69);
});

test('Resultado de 20 + 5 + 12 + 8 = 45', () => {
    expect(soma([20, 5, 12, 8])).toBe(45);
});