// Questão 13

import { input } from '#core/input.ts'

const n1 = Number(input('Digite o primeiro número: '))
const n2 = Number(input('Digite o segundo número: '))

if (n1 >= n2) {
    console.log('Maior: ' + n1)
} else {
    console.log('Maior: ' + n2)
}
