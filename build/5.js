"use strict";
// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
class User {
    constructor(nome, idade, ocupacao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.ocupacao = ocupacao;
        this.salario = salario;
    }
}
const user1 = new User("Gabrieli", 27, "analista de engenharia", 3600);
const user2 = new User('Daphney', 23, "analista de TI");
function informacaoUsuario(user) {
    return `${user.nome}, ${user.idade} anos, ${user.ocupacao}, ${user.salario ? user.salario : "N/A"}`;
}
console.log(informacaoUsuario(user1));
console.log(informacaoUsuario(user2));
console.log("----------------------------------------------------------------");
