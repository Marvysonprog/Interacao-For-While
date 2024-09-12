const tc = require("readline-sync");

function analiseMultiplos() {
  let multDoiseCinco: number = 0;
  let multDoiseTres: number = 0;

  while (true) {
    let valor = parseInt(tc.question("Digite um valor: "));

    if (valor % 2 == 0 && valor % 5 == 0) {
      multDoiseCinco += 1;
    } else if (valor % 2 == 0 && valor % 3 == 0) {
      multDoiseTres += 1;
    }
 
    if (valor == -1) {
      console.log(`Foram digitados ${multDoiseCinco} multiplos de 2 e 5.`);
      console.log(`Foram digitados ${multDoiseTres} multiplos de 2 e 3.`);
      console.log("Programa encerrado.");
      break;
    }
  }
}
analiseMultiplos();
