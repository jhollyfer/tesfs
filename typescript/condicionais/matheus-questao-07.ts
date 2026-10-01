import { input } from "#core/input.ts";

const formaPagamento = Number(input("Digite a forma de pagamento: "));
const valorCompra = Number(input("Digite o valor da compra: "));
let valorFinal = valorCompra;

if (formaPagamento !== 1 && formaPagamento !== 2) {
  console.log("Forma de pagamento inválida")

} else if (formaPagamento == 1) {

  valorFinal = valorCompra - (valorCompra * 0.10)
  console.log(`O valor a ser pago é ${valorFinal}`)

} else {

  valorFinal = valorCompra + (valorCompra * 0.05)
  console.log(`O valor a ser pago é ${valorFinal}`)
}
