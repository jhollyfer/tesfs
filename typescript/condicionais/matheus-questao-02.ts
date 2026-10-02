import { input } from "#core/input.ts";

const numero = Number(input("Digite um número: "))

if (numero % 2 == 0) {
  console.log(`O número ${numero} é par.`)
} else {
  console.log(`o número ${numero} é ímpar.`)
}
