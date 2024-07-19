const pagamento = (preco, opcao) => {
    if (opcao === 1) {
        console.log('Opção débito');
        console.log(`Valor a ser pago é de: ${preco * 0.90}`);
    } else if (opcao === 2) {
        console.log('Opção à vista');
        console.log(`Valor a ser pago é de: ${preco * 0.85}`);
    } else if (opcao === 3) {
        console.log('Opção 2 vezes');
        console.log(`Valor a ser pago é de: ${preco}`);
    } else if (opcao === 4) {
        console.log('Opção acima de duas vezes');
        console.log(`Valor a ser pago é de: ${(preco * 1.10).toFixed(2)}`);
    }
}



(function main() {
    var pp = 100;
    op = 4;

    pagamento(pp, op);



})();