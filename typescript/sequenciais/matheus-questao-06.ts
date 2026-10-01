import { input } from "#core/input.ts";

const horasTrabalhadas = Number(input("Digite as horas trabalhadas: "))
const valorPorHora = Number(input("Digite o valor por hora: "))
const salarioBruto = horasTrabalhadas * valorPorHora

console.log(`Seu salario bruto é: ${salarioBruto}`)
