// Questão 28

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

let divisor = 1
let quantidadeDivisores = 0

while (divisor <= numero) {
    if (numero % divisor === 0) {
        quantidadeDivisores = quantidadeDivisores + 1
    }

    divisor = divisor + 1
}

if (quantidadeDivisores === 2) {
    console.log('É primo')
} else {
    console.log('Não é primo')
}
