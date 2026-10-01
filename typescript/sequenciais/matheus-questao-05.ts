import { input } from "#core/input.ts"

const preco = Number(input("Digite o preço: "))
const valorDesconto = preco - (preco * 0.15)

console.log(`O valor do produto com desconto é: ${valorDesconto}`)
