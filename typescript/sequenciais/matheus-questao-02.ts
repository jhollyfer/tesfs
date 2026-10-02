import { input } from "#core/input.ts";

const numero1 = Number(input("Digite um número: "))
const numero2 = Number(input("Digite outro número: "))

const soma = Number(numero1) + Number(numero2)
const multiplicacao = (numero1) * (numero2)
const divisao = (numero1) / (numero2)
const subtracao = (numero1) - (numero2)

console.log(`Soma: ${soma}`)
console.log(`Multiplicação: ${multiplicacao}`)
console.log(`Divisão: ${divisao}`)
console.log(`Subtração: ${subtracao}`)
