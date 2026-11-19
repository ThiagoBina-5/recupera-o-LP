let livrosE = Number(prompt("quantos livros voce pegou na biblioteca?"))

let atraso = confirm("tem algum livro em atraso?")

if (livrosE >= 3  ||  atraso == true) {

    console.log("Empréstimo negado.")
} else {

     console.log("empréstimo liberado")
}