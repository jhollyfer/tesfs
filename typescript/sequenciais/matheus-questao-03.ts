import { input } from "#core/input.ts"

const base = Number(input("Digite a base: "))
const altura = Number(input("Digite a altura: "))

const area = base * altura
console.log(`A área do retângulo é: ${area}`)

const perimetro = 2 * (base + altura)

console.log(`O perímetro do retângulo é: ${perimetro}`)
