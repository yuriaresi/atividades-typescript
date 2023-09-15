
// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

type diretor = {
    nome: string;
    idade: number;
    comissao: string;
    salario?: number;
}

type usuario = {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
}

type diretorOuUsuario = diretor | usuario;

const lista: diretorOuUsuario[] = [
    { nome: 'Gabrieli', idade: 27, comissao: 'nivel 5', salario: 35000 },
    { nome: 'Daphine', idade: 23, ocupacao: 'analista de TI' },
]

function detalhes(lista: diretorOuUsuario[]) {
    lista.forEach((item) => {
        if ('ocupacao' in item) {
            console.log(`Usuario(a) ${item.nome}, ${item.idade} anos, ${item.ocupacao}, ${item.salario ? item.salario : "N/A"}`)
        } else {
            console.log(`Diretor(a) ${item.nome}, ${item.idade} anos, ${item.comissao}, R$:${item.salario ? item.salario : "N/A"}`)
        }
    })

}

detalhes(lista)