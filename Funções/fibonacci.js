function fibonacci(quantidade_de_numeros) {
    let numero1, numero2, sucessor;
    numero1 = 0;
    numero2 = 1;

    if(quantidade_de_numeros <= 0) {
        return [];
    } else if(quantidade_de_numeros == 1) {
        return [0];
    } else if(quantidade_de_numeros == 2) {
        return[0, 1];
    }

    numeros = [0, 1];
    for(i = 2;i<quantidade_de_numeros;i++) {
        sucessor = numero1+numero2;
        numero1 = numero2;
        numero2 = sucessor;
        numeros.push(sucessor);
    }
    return numeros;
}
module.exports = fibonacci;
