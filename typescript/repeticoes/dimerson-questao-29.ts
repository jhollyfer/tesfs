// Questão 29

import { input } from '#core/input.ts'

const limite = Number(input('Digite o limite: '))

let anterior = 0
let atual = 1
let quantidade = 0;

let fibonacci = ""

while (quantidade < limite) {
  if (quantidade === 0)
      fibonacci += anterior

  if (!(quantidade === 0))
    fibonacci += " " + anterior

  const proximo = anterior + atual
  anterior = atual
  atual = proximo
  quantidade++
}

console.log(fibonacci)
