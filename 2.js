let moedasde5 = Number(prompt("Quantas moedas de 5 centavos?"))
let moedasde10 = Number(prompt("Quantas moedas de 10 centavos?"))
let moedasde25 = Number(prompt("Quantas moedas de 25 centavos?"))
let moedasde50  = Number(prompt("Quantas moedas de 50 centavos?"))
let moedasde1real  = Number(prompt("Quantas moedas de 1 real?"))

const valor5 = 0.05;
const valor10 = 0.10;
const valor25 = 0.25;
const valor50 = 0.50;
const valor1Real = 1.00;

total = (moedasde10* valor10) + (moedasde5 * valor5) + (moedasde50 * valor50) + (moedasde1real * valor1Real) + (moedasde25 * valor25)

console.log  (`${total}`)