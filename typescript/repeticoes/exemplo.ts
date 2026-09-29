// Executar: node typescript/repeticoes/exemplo.ts (se tiver na raiz)
import { input } from '#core/input.ts'

let contador = 0

const numero = Number(input('Digite número: '))

while (contador <= numero) {
  console.log(contador)
  contador = contador + 1
}
