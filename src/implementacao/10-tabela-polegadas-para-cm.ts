function tabelaConversao() {
  const polegada: number = 2.54;

  for (let i = 1; i <= 20; i++) {
    let centimetro: number = polegada * i;

    console.table({ [`${i} polegadas`]: centimetro + " centimetros" });
  }
}
tabelaConversao();
