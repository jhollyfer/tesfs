// Questão 17

import { input } from '#core/input.ts'

const valor = Number(input('Digite o valor da compra: '))
const forma = Number(input('Digite a forma de pagamento (1 - à vista / 2 - cartão): '))

let total = valor

if (forma === 1) {
    total = valor - (valor * 0.10)
} else if (forma === 2) {
    total = valor + (valor * 0.05)
} else {
    console.log('Forma de pagamento inválida')
}

console.log('Total: ' + total)
