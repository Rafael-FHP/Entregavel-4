function somatorio(conjunto) {
    let soma_do_conjunto = 0;

    for(i=0;i<conjunto.length;i++) {
        soma_do_conjunto = parseInt(conjunto[i]) + soma_do_conjunto;
    }
    return soma_do_conjunto;
}
module.exports = somatorio;