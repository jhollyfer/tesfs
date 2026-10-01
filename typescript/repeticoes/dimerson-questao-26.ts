// Questão 26

import { input } from '#core/input.ts'

let numero = Number(input('Digite um número: '))
let soma = 0
let quantidade = 0

while (numero !== 0) {
    soma = soma + numero
    quantidade = quantidade + 1
    numero = Number(input('Digite um número: '))
}

console.log('Quantidade: ' + quantidade)
console.log('Soma: ' + soma)
