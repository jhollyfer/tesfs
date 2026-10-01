// Questão 27

import { input } from '#core/input.ts'

let contador = 1
let menores = 0
let adultos = 0
let idosos = 0

while (contador <= 20) {
    const idade = Number(input('Digite a idade: '))

    if (idade < 18) {
        menores = menores + 1
    } else if (idade >= 60) {
        idosos = idosos + 1
    } else {
        adultos = adultos + 1
    }

    contador = contador + 1
}

console.log('Menores: ' + menores)
console.log('Adultos: ' + adultos)
console.log('Idosos: ' + idosos)
