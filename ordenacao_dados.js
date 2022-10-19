const vetor = [1, 5, 2, 3, 4];

function bolha(vetor, total) {
  let i, j, temp;

  for (i = 0; i < total; i++) {
    for (j = i + 1; j < total; j++) {
      if (vetor[i] > vetor[j]) {
        temp = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = temp;
      }
    }
  }
}

function imprimir(vetor, total) {
  let j;
  for (j = 0; j < total; j++) {
    console.log(vetor[j]);
  }
  console.log("\n");
}

bolha(vetor, vetor.length);
imprimir(vetor, vetor.length);
