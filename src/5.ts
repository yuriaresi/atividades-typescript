// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

type user = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number | string;
}

export const user1: user = {
    nome: "Gabrieli",
    idade: 27,
    ocupacao: "analista de engenharia",
    salario: 3600
}

export const user2: user = {
    nome: "Daphne",
    idade: 23,
    ocupacao: "analista de TI"
}


function informacaoUsuario(user: user): string {
    return `${user.nome}, ${user.idade} anos, ${user.ocupacao}, ${user.salario ? user.salario : "N/A"}`
}

console.log(informacaoUsuario(user1));

console.log(informacaoUsuario(user2));





console.log("----------------------------------------------------------------");





