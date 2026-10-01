// Questão 5

import { input } from '#core/input.ts'

const preco = Number(input('Digite o preço do produto: '))

const desconto = preco * 0.15
const valorFinal = preco - desconto

console.log('Valor com desconto: ' + valorFinal)
