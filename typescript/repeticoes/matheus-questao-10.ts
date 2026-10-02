import { input } from "#core/input.ts"

let quantidade = 0
let total = 0
let maisCaro = 0
let preco = 0

do {
  preco = Number(input("Digite o preço do item ou 0 para finalizar a compra: "))

  if (preco !== 0) {
    quantidade++
    total += preco

    if (preco > maisCaro) {
      maisCaro = preco
    }
  }
} while (preco !== 0)

console.log(`Quantidade de itens: ${quantidade}`)
console.log(`Total: ${total}`)
console.log(`Item mais caro: ${maisCaro}`)

const valorPago = Number(input("Digite o valor pago: "))

if (valorPago >= total) {
  console.log(`Troco: ${valorPago - total}`)
} else {
  console.log("Valor pago insuficiente")
}
