// Executar: node condicionais/exemplo.ts
import { input } from '#core/input.ts'

const sorteado = 1
const numero = Number(input('Digite um numero: '))

if (numero === sorteado) {
  console.log('Você ganhou!')
}

if (numero !== sorteado) {
  console.log("Você perdeu!")
}
