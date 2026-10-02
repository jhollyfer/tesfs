// Questão 3

import { input } from '#core/input.ts'

const base = Number(input('Digite a base: '))
const altura = Number(input('Digite a altura: '))

const area = base * altura
const perimetro = 2 * (base + altura)

console.log('Área: ' + area)
console.log('Perímetro: ' + perimetro)
