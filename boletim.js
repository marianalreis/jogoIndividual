let notas = [7.5, 9, 6];
let media = 0;

for (let i = 0; i < notas.lenght; i++) {
    media += notas[i];
}
media = media / 3;


if (media => 7) {
console.log("Parabéns! Você está aprovado!")
} else {
    console.log("Você está reprovado! Estude mais na próxima.")
}