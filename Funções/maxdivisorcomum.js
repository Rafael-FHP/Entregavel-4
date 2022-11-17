function calcularMaxDivisorComum(n1, n2) {
    while (n2 !== 0) {
            let resto = n1 % n2;
            n1 = n2;
            n2 = resto;
        }
        return n1;
    }

function MaxDivisorComum(numeros) {
    let MDC = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        MDC = calcularMaxDivisorComum(MDC, numeros[i]);
    }
    return MDC;
}

module.exports = MaxDivisorComum;