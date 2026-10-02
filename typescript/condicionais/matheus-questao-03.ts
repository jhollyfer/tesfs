import { input } from "#core/input.ts";

const numero1 = Number(input("Digite o primeiro número: "))
const numero2 = Number(input("Digite o segundo número: "))

if (numero1 > numero2) {
  console.log(`O ${numero1} é maior.`)
} else {
  console.log(`O ${numero2} é maior.`)
}
