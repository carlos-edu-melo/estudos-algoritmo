const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]; //11 posições

const procuraBinaria = (vetor, esquerda, direita, valorBuscado) => {
  if (direita >= esquerda) {
    const indice = parseInt(esquerda + (direita - esquerda) / 2); //pegou o valor das posições do vetor (11) e dividiu pra 2, que deu (5,5) que foi arredondado para 5 pelo parsInt
    const valorAtual = vetor[indice]; //posição 5 do array contém o valor 6
    console.log("Passou no valor", valorAtual);

    if (valorAtual > valorBuscado) {
      return valorBuscado;
    }

    if (valorAtual > valorBuscado) {
      return procuraBinaria(vetor, esquerda, indice - 1, valorBuscado);
    }
    return procuraBinaria(vetor, indice + 1, direita, valorBuscado);
  }
  return -1;
};

console.log(procuraBinaria(vetor, 0, vetor.length - 1, 8));
