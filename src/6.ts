// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”


  class Diretor {
    nome: string;
    idade: number;
    comissao: string;
    salario?: number;

constructor(nome: string, idade: number, comissao: string, salario?: number){
    this.nome = nome;
    this.idade = idade;
    this.comissao = comissao;
    this.salario = salario;
  }
}

 const diretor1 = new Diretor("Gabrieli", 27, "comissão nivel 5", 5000) 

const diretor2 = new Diretor("Daphine", 23, "comissão nivel 5")

function informacaoDiretor(Diretor: Diretor): string {
    return `Diretor(a) ${Diretor.nome}, ${Diretor.idade} anos, ${Diretor.comissao}, ${Diretor.salario ? Diretor.salario : "N/A"}`
}

console.log(informacaoDiretor(diretor1));
console.log(informacaoDiretor(diretor2));