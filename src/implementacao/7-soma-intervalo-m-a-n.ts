const rl = require("readline-sync");

function somarNumerosEntreMeN() {
  while (true) {
    let numero1 = parseInt(rl.question("Digite o primeiro numero: "));
    let numero2 = parseInt(rl.question("Digite o segundo numero: "));
    let soma: number = 0;
    for (let i = numero1; i <= numero2; i++) {
      soma += i;
    }
    if (numero1 > numero2) {
        console.log("Programa encerrado, pois o primeiro numero precisa ser menor do que o segundo.")
      break;
    }
    console.log(soma);
  }
}
somarNumerosEntreMeN();
