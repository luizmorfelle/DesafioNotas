import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const notas = [1, 5, 10, 50, 100];

rl.question("Insira um valor: ", (valor) => {
  notas
    .filter((nota) => nota <= valor)
    .sort(function (a, b) {
      return b - a;
    })
    .forEach((nota) => {
      const numNotas = Math.floor(valor / nota);
      if (numNotas > 0) {
        valor = valor - numNotas * nota;
        console.log(numNotas + (numNotas == 1 ? " nota de $" : " notas de $") + nota);
      }
    });
    rl.close()
  console.log("\n");
});
