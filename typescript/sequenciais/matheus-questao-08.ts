import { input } from "#core/input.ts";

const valorReais = Number(input("Digite o valor em reais: "))
const cotacaoPeso = 0.0015
const valorPeso = valorReais / cotacaoPeso

console.log(`O valor em peso é: ${valorPeso}`)
