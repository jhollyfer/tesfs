// Questão 25

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

let contador = 1
let fatorial = 1

while (contador <= numero) {
    fatorial = fatorial * contador
    contador = contador + 1
}

console.log('Fatorial: ' + fatorial)
