// Questão 23

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

let contador = 1

while (contador <= 10) {
    const resultado = numero * contador
    console.log(numero + ' x ' + contador + ' = ' + resultado)
    contador = contador + 1
}
