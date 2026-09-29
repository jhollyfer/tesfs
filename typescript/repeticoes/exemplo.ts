// Executar: node repeticoes/exemplo.ts
import { input } from '#core/input.ts'

let contador = 0

const numero = Number(input('Digite número: '))

while (contador <= numero) {
  console.log(contador)
  contador = contador + 1
}
