import { input } from "#core/input.ts"

const peso = Number(input("Digite seu peso: "))
const altura = Number(input("Digite sua altura: "))

const imc = peso / (altura * altura)

console.log(`Seu IMC é: ${imc}`)
