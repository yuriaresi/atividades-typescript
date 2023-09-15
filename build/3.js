"use strict";
// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.
let carteira = 1000;
function saque(valor) {
    const saldoFinal = carteira - valor;
    carteira = saldoFinal; //
    if (saldoFinal < 0) {
        return "saldo insuficiente.";
    }
    return "Saldo final é de: " + saldoFinal + " reais";
}
console.log(`O valor da carteira é de ${carteira} reais.`);
console.log(saque(1010));
console.log("-----------------------------------------");
function deposito(valor) {
    const saldoFinal = carteira + valor;
    carteira = saldoFinal; //
    return "Saldo final é de: " + saldoFinal + " reais.";
}
console.log(deposito(1500));
