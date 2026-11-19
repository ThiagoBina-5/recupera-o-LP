let total = 0;
let DiasSemTreinar = 0;

for (let dia = 1; dia <= 5; dia++) {
    const km = Number(prompt(`Km no dia ${dia}:`));
   
    total += km;

    if (km === 0) {
        DiasSemTreinar++;
    }
}
    const media = total / 5;

console.log(`Total: ${total} km`);
console.log(`Média: ${media} km por dia`);
console.log(`Dias sem treino: ${DiasSemTreinar}`);