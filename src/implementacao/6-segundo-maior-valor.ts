const teclado = require("readline-sync");

function mostrarSegundoMaiorValor() {
  let maiorValor: number = 0;
  let segundoMaiorValor: number = 0;

  const quantidade = parseInt(
    teclado.question("Digite a quantidade de numeros: ")
  );

  for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(teclado.question("Digite um numero: "));

    if (numero > maiorValor) {
      let temp = maiorValor;
      maiorValor = numero;
      segundoMaiorValor = temp;
    }
  }
  console.log(segundoMaiorValor);
}
mostrarSegundoMaiorValor();
