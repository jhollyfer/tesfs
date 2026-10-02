import { input } from "#core/input.ts";

let soma = 0
let contador = 0
let media = 0

while (contador < 10) {
  const numero = Number(input("Digite um número: "));
  soma = soma + numero;
  contador++;
}

media = soma / contador;
console.log(`A média é: ${media}`);
console.log(`A soma é: ${soma}`)
