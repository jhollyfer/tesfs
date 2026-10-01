import { input } from "#core/input.ts";

const idade = Number(input("Digite sua idade: "))

if (idade >= 16) {
  console.log("Ja pode votar!")
} else {
  console.log("Voçê não pode votar")
}
