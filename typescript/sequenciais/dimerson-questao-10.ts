// Questão 10

import { input } from '#core/input.ts'

const quilometros = Number(input('Digite a quantidade de quilômetros: '))
const litros = Number(input('Digite a quantidade de litros: '))

const consumo = quilometros / litros

console.log('Consumo: ' + consumo + ' km/l')
