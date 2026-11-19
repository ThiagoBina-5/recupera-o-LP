let distancia = Number(prompt("qual a distania em km percorrida?"))

let consumo = Number(prompt("qual o consumo por litro do carro?"))

let precoLitro = Number(prompt("qual o preço do combustivel por litro?"))

let amigos = Number(prompt("quantos amigos participarão da viagem?"))



let consumoD = distancia / consumo

let custoTotal = consumoD * precoLitro

let custoA = custoTotal / amigos

console.log(`litros:${consumoD} custo total:${custoTotal} cada amigo paga:${custoA} `)