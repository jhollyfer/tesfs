import { input } from "#core/input.ts"

const numero = Number(input("Digite um número: "))

let divisor = 2
let ePrimo = numero > 1

while (divisor < numero) {
  if (numero % divisor === 0) {
    ePrimo = false
  }
  divisor++
}

if (ePrimo) {
  console.log(`${numero} é primo`)
} else {
  console.log(`${numero} não é primo`)
}
