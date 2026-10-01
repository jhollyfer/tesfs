// Questão 12

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

if (numero % 2 === 0) {
    console.log('Par')
} else {
    console.log('Ímpar')
}
