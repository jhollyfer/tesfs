// Questão 2

import { input } from '#core/input.ts'

const n1 = Number(input('Digite o primeiro número: '))
const n2 = Number(input('Digite o segundo número: '))

const soma = n1 + n2
const subtracao = n1 - n2
const multiplicacao = n1 * n2
const divisao = n1 / n2

console.log('Soma: ' + soma)
console.log('Subtração: ' + subtracao)
console.log('Multiplicação: ' + multiplicacao)
console.log('Divisão: ' + divisao)
