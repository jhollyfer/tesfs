import { input } from "#core/input.ts";


let contador = 0
let soma = 0
let numero = 0

do {
  numero = Number(input("Digite um número: "))
  soma += numero
  contador++
} while (numero !== 0)

console.log(`A soma foi ${soma} e os números digitados foram ${contador}`)
