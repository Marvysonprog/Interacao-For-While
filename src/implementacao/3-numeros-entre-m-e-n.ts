function mostrarNumerosEntreMeN() {
    const readline = require('readline');
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
        let numero1 = parseInt(primeiroNumero);
        teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
            let numero2 = parseInt(segundoNumero);

            if( numero1 < numero2){
                for(let i = numero1 ; i <= numero2 ; i++){
                    console.log(i);
                }
            } else {
                console.log("O primeiro valor precisa ser menor do que o segundo.")
            }
            teclado.close();
        })
    })
}
mostrarNumerosEntreMeN();