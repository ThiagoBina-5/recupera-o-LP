let bateria = Number(prompt("qual a bateria do seu celular? (de 0 A 100"))

if (bateria == 100) {
console.log("Bateria totalmente carregada.")
}
 
else if (bateria  > 20 && bateria <= 99 ){
console.log(`Bateria em ${bateria}%`)
} 

else if ( bateria >= 1 && bateria < 21 ) {
console.log (`Bateria fraca. Ative o modo de economia de energia.`)
}

else if (bateria == 0 ) { 
console.log (`Bateria esgotada.`)
}

 else   {
console.log(`A bateria inseriada é invalida`)
}