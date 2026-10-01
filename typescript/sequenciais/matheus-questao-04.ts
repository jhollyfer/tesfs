import { input } from "#core/input.ts";

const nota1 = Number(input("Digite a nota 1: "))
const nota2 = Number(input("Digite a nota 2: "))
const nota3 = Number(input("Digite a nota 3: "))

const media = (nota1 + nota2 + nota3) / 3

console.log(`A media do aluno é: ${media}`)
