// Questão 24

import { input } from '#core/input.ts'

let contador = 1
let soma = 0

while (contador <= 10) {
    const numero = Number(input('Digite um número: '))
    soma = soma + numero
    contador = contador + 1
}

const media = soma / 10

console.log('Soma: ' + soma)
console.log('Média: ' + media)
