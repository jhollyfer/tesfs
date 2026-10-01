// Questão 30

import { input } from '#core/input.ts'

let preco = Number(input('Digite o preço do produto (0 para finalizar): '))

let quantidade = 0
let total = 0
let maior = 0

while (preco !== 0) {
    total = total + preco
    quantidade = quantidade + 1

    if (preco > maior) {
        maior = preco
    }

    preco = Number(input('Digite o preço do produto (0 para finalizar): '))
}

const pago = Number(input('Digite o valor pago: '))
const troco = pago - total

console.log('Quantidade: ' + quantidade)
console.log('Total: ' + total)
console.log('Item mais caro: ' + maior)
console.log('Troco: ' + troco)
