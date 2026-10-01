// Questão 14

import { input } from '#core/input.ts'

const idade = Number(input('Digite sua idade: '))

if (idade >= 16) {
    console.log('Pode votar')
} else {
    console.log('Não pode votar')
}
