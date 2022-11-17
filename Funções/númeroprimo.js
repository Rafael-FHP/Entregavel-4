function numero_primo(numero) {
    let ehPrimo = true;
    for(let i = 2; i<numero;i++) {
        if(numero % i == 0) {
            ehPrimo = false;
            break;
        }
    }
    return ehPrimo;
}
module.exports = numero_primo;