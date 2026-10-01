import { input } from "#core/input.ts";

const salario = Number(input("Digite o salário: "))

let novoSalario

if (salario <= 1000) {
  novoSalario = salario + (salario * 0.20)
  console.log(`Seu salario é ${novoSalario}`)
} else if (salario <= 3000) {
  novoSalario = salario + (salario * 0.10)
  console.log(`Seu salario é ${novoSalario}`)
} else {
  novoSalario = salario + (salario * 0.05)
  console.log(`Seu salario é ${novoSalario}`)
}
