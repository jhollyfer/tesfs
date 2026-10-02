import { input } from "#core/input.ts";

let numero1 = Number(input("Digite o primeiro número: "));
let numero2 = Number(input("Digite o segundo número: "));
let numero3 = Number(input("Digite o terceiro número: "));

let maior = numero1

if (numero2 > maior) {
  maior = numero2
}

if (numero3 > maior) {
  maior = numero3
}

console.log(`O maior número é o ${maior}`)
