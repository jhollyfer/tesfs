// Questão 4

import { input } from '#core/input.ts'

const nota1 = Number(input('Digite a primeira nota: '))
const nota2 = Number(input('Digite a segunda nota: '))
const nota3 = Number(input('Digite a terceira nota: '))

const media = (nota1 + nota2 + nota3) / 3

console.log('Média: ' + media)
