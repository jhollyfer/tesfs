// Questão 16

import { input } from '#core/input.ts'

const n1 = Number(input('Digite o primeiro número: '))
const n2 = Number(input('Digite o segundo número: '))
const n3 = Number(input('Digite o terceiro número: '))

let maior = n1

if (n2 > maior) {
    maior = n2
}

if (n3 > maior) {
    maior = n3
}

console.log('Maior: ' + maior)
