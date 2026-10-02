// Questão 7

import { input } from '#core/input.ts'

const celsius = Number(input('Digite a temperatura em Celsius: '))

const fahrenheit = celsius * 9 / 5 + 32

console.log('Temperatura em Fahrenheit: ' + fahrenheit)
