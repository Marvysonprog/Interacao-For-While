function mostrarMaiorValor() {
    const readline = require('readline');
    const teclado = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    teclado.question("Digite um numero: ", (primeiroNumero: string) => {
        let numero1 = parseInt(primeiroNumero);
        
        for( let i = 0 ; i < numero1 ; i++){
            console.log();
        }
        teclado.close();
    })
}
mostrarMaiorValor();