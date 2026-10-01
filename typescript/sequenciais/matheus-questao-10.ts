import { input } from "#core/input.ts";

const kmPercorridos = Number(input("Digite quilometros percorridos: "))
const litrosGastos = Number(input("Digite os litros gastos: "))
const consumoLitrosPorKm = litrosGastos / kmPercorridos

console.log(`O total de litros consumidos por km foi: ${consumoLitrosPorKm}`)
