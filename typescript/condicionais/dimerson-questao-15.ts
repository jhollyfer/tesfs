// Questão 15

import { input } from '#core/input.ts'

const media = Number(input('Digite a média: '))

if (media >= 7) {
    console.log('Aprovado')
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
