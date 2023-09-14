// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”


type diretor = {
    nome: string;
    idade: number;
    comissao: string;
    salario?: number | string;
}

const diretor1: diretor = {
    nome: 'Gabrieli',
    idade: 27,
    comissao: 'comissão nivel 5',
    salario: 3600
}

const diretor2: diretor = {
    nome: 'Daphne',
    idade: 23,
    comissao: 'comissão nivel 5'
}

function informacaoDiretor(diretor: diretor): string {
    return `Diretor(a) ${diretor.nome}, ${diretor.idade} anos, ${diretor.comissao}, ${diretor.salario ? diretor.salario : "N/A"}`
}

console.log(informacaoDiretor(diretor1));
console.log(informacaoDiretor(diretor2));