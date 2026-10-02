import { input } from "#core/input.ts";

let contador = 0

const numero = Number(input("Digite um número: "))

let resultado = 0

while (contador <= 10) {
  resultado = numero * contador
  console.log(`${numero}  x  ${contador} = ${resultado}`);

  contador++;
}
