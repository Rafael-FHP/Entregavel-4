const Mdc = require('../Funções/maxdivisorcomum');

test('o MDC de 8, 32 e 64 deve ser 8', () => {
  expect(Mdc([8, 32, 64])).toBe(8);
});

test('o MDC de 5, 20 e 50 deve ser 5', () => {
    expect(Mdc([5, 20, 50])).toBe(5);
  });