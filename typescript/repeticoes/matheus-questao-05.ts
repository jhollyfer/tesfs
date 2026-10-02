import { input } from "#core/input.ts";

let fatorial = 1

const numero = Number(input("Digite um número: "))
let contador = numero

while (contador > 1) {
  fatorial = fatorial * contador
  contador--
}

console.log(`${numero} x ${fatorial} = ${numero * fatorial}`)
