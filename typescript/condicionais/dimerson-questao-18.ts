// Questão 18

import { input } from '#core/input.ts'

const salario = Number(input('Digite o salário: '))

let aumento = 0

if (salario <= 1000) {
    aumento = salario * 0.20
} else if (salario <= 3000) {
    aumento = salario * 0.10
} else {
    aumento = salario * 0.05
}

const novoSalario = salario + aumento

console.log('Novo salário: ' + novoSalario)
