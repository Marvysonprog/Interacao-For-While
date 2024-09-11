const readline = require("readline-sync")

function mostrarMaiorValor() {
    let maiorNumero: number = 0;

    const quantidade = parseInt(readline.question("Quantos numeros voce deseja digitar?: "))

    for (let i = 0; i < quantidade; i++) {
        const numero = parseInt(readline.question("Digite um numero: "))
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    console.log("O maior número é: ", maiorNumero)
}

mostrarMaiorValor()