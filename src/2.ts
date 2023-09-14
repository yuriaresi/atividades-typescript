// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface notas {
    nota:number
    peso:number
}

function calcularMediaPonderada(notas: notas[]): number {
    let somaNotas = 0;
    let somaPesos = 0;
  
    for (const item of notas) {
      somaNotas += (item.nota * item.peso);
      somaPesos += item.peso;
    }
    const mediaPonderada = somaNotas / somaPesos;
    return mediaPonderada;
}

   const notasPesos: notas[] = [
    {nota:10, peso:5},
    {nota:5, peso:5},
   ] 
   
   const mediaPonderada: string = calcularMediaPonderada(notasPesos).toFixed(1);

   console.log(`A Média ponderada é: ${mediaPonderada} `);

   console.log("-------------------------------------")

   const notasPesos2: notas[] = [
    {nota:10, peso:5},
    {nota:5, peso:2},
    {nota:3, peso:3},
   ]

   const mediaPonderada2: string = calcularMediaPonderada(notasPesos2).toFixed(1);
   console.log(`A Média ponderada é: ${mediaPonderada2}`)


    
