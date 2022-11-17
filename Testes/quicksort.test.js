const quicksort = require('../Funções/quicksort');

test('O array vai ser ordenado corretamente', () => {
  expect(quicksort([55, 80, 106, 15, 5321, 10053, 973])).toMatchObject([15, 55, 80, 106, 973, 5321, 10053]);
});

test('O array vai ser ordenado corretamente', () => {
    expect(quicksort([75, 105, 55, 5, 165])).toMatchObject([5, 55, 75, 105, 165]);
});