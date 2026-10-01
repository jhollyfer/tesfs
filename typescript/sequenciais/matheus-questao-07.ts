import { input } from "#core/input.ts";

const temperaturaCelsius = Number(input("Digite a temperatura em Celsius: "))
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}`)
