let notas = [7.5, 9, 6];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / 3;



if (media >= 7) {
console.log("Parabéns! Você está aprovado! ")
} else {
    console.log("Você está reprovado! Estude mais na próxima.")
}
