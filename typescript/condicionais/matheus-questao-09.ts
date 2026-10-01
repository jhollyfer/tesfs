import { input } from "#core/input.ts";

const ladoA = Number(input("Digite o lado A: "))
const ladoB = Number(input("Digite o lado B: "))
const ladoC = Number(input("Digite o lado C: "))

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  console.log("É um triângulo")

  if (ladoA == ladoB && ladoB == ladoC) {
    console.log("O triângulo é equilátero")
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("É um triângulo isósceles")
  } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
    console.log("O triângulo é escaleno")
  }
}  else {
  console.log("Não é um triângulo")
}
