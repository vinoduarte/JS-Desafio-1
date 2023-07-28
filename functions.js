let Number1 = prompt(`Escreva seu primeiro número.`)
let Number2 = prompt(`Escreva seu segundo número.`)

let equations = [
  `A soma dos dois números é ${(Number(Number1) + Number(Number2)).toFixed(2)}`,
  `A subtração dos dois números é ${(Number(Number1) - Number(Number2)).toFixed(2)}`,
  `A multiplicação dos dois números é ${(Number(Number1) * Number(Number2)).toFixed(2)}`, 
  `A divisão dos dois números é ${(Number(Number1) / Number(Number2)).toFixed(2)}`,
  `A resto da divisão dos dois números é ${(Number(Number1) % Number(Number2)).toFixed(2)}`,
]

for(let result of equations) {
  alert(result)
}

if ((Number(Number1) + Number(Number2)) % 2 == 0) {
  alert(`Curiosidade: seu número é par!`) 
} else {
  alert(`Curiosidade: seu número é ímpar!`)
}

if (Number1 == Number2) {
  alert(`É bom observar também que eles são iguais entre si!`)
} else {
  alert(`É bom observar também que eles são diferentes um do outro!`)
}
