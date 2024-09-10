import { parse } from "path";

function mostrarMaiorValor() {
    const readline = require('readline');
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let contador: number = 0;
    let maiorNumero: number = 0;

    teclado.question("Quantos numeros voce deseja digitar?: ", (totalNumeros: string) => {
        let quantidade = parseInt(totalNumeros);

        if (contador <= quantidade) {

            teclado.question("Digite um numero: ", (valor: string) => {
                let numero = parseInt(valor);
                if (numero > maiorNumero) {
                    maiorNumero = numero
                }
                contador++;
                teclado.close();
            })
            console.log(maiorNumero)
        }

    })
}
mostrarMaiorValor();