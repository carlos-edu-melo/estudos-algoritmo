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

bolha(vetor, vetor.length);
