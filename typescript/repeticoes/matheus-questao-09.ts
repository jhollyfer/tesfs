import { input } from "#core/input.ts";

let numeroAtual = 1
let numeroAnterior = 0

const numero = Number(input("Digite um número: "))
console.log(numeroAnterior)

while (numeroAtual <= numero) {
  console.log(numeroAtual)
  const proximo = numeroAtual + numeroAnterior
  numeroAnterior = numeroAtual
  numeroAtual = proximo
}
