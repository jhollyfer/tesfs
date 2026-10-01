// Questão 6

import { input } from '#core/input.ts'

const horas = Number(input('Digite as horas trabalhadas: '))
const valorHora = Number(input('Digite o valor da hora: '))

const salario = horas * valorHora

console.log('Salário bruto: ' + salario)
