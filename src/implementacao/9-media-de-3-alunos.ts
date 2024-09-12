const readl = require("readline-sync");

function mediaNotas() {
  for (let i = 1; i <= 3; i++) {
    const nomeAluno = readl.question("Digite o nome do aluno: ");
    const primeiraNota = parseFloat(
      readl.question("Digite a primeira nota de " + nomeAluno + ": ")
    );
    const segundaNota = parseFloat(
      readl.question("Digite a segunda nota de " + nomeAluno + ": ")
    );
    const terceiraNota = parseFloat(
      readl.question("Digite a terceira nota de " + nomeAluno + ": ")
    );

    let media: number = (primeiraNota + segundaNota + terceiraNota) / 3;

    if (media >= 7 && media <= 10) {
      console.log(nomeAluno + " Foi Aprovado!");
    } else if (media > 4 && media < 7) {
      console.log(nomeAluno + " Vai para Recuperação!");
    } else {
      console.log(nomeAluno + " Foi Reprovado!");
    }
  }
}
mediaNotas();
