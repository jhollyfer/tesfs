// Questão 19

import { input } from '#core/input.ts'

const a = Number(input('Digite o primeiro lado: '))
const b = Number(input('Digite o segundo lado: '))
const c = Number(input('Digite o terceiro lado: '))

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Equilátero')
    } else if (a === b || a === c || b === c) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
} else {
    console.log('Não formam um triângulo')
}
