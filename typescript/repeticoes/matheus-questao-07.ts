import { input } from "#core/input.ts"

let contador = 0
let menor = 0
let adulto = 0
let idoso = 0

while (contador < 20) {
  const idade = Number(input("Digite sua idade: "))
  if (idade < 18) {
    menor++
  } else if (idade < 60) {
    adulto++
  } else {
    idoso++
  }
  contador++
}

console.log(`É de menor: ${menor}`)
console.log(`É adulto: ${adulto}`)
console.log(`É idoso: ${idoso}`)
