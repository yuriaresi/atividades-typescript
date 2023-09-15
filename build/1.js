"use strict";
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if (media >= 6) {
        return true;
    }
    else {
        return false;
    }
}
const Notafinal = calcularMedia(5, 3);
console.log(`O Aluno esta aprovado? ${Notafinal}`);
