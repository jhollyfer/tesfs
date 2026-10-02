import { input } from "#core/input.ts";

let contador = 0;

while (contador <= 50) {
  if (contador % 2 === 0) {
    console.log(contador);
  }
  contador++;
}
