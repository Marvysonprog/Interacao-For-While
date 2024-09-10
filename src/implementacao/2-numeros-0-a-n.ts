function mostrarNumerosAteN() {
    const readline = require('readline');
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    teclado.question("Digite um numero: ", (numero: string) => {
        let numeroConvertido: number = parseInt(numero);

        for(let i = 0 ; i <= numeroConvertido ; i++){
            console.log(i);
        }
        teclado.close();
    })

}
mostrarNumerosAteN();