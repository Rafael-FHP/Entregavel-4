const fibonacci = require('../Funções/fibonacci');

test('Os 10 primeiros números da contagem de fibonacci devem ser 0, 1, 1, 2, 3, 5, 8, 13, 21,', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
});

test('Os 6 primeiros números da contagem de fibonacci devem ser 0, 1, 1, 2, 3, 5.', () => {
    expect(fibonacci(6)).toMatchObject([0, 1, 1, 2, 3, 5])
});

