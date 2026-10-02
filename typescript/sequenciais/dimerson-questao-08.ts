// Questão 8

import { input } from '#core/input.ts'

const reais = Number(input('Digite o valor em reais: '))
const cotacao = Number(input('Digite a cotação: '))

const pesos = reais * cotacao

console.log('Valor em pesos colombianos: ' + pesos)
