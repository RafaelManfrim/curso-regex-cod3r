// . representa um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

// Encontrando 1.2, independente do que tiver no meio

console.log(texto.match(/1.2/g))

// Não existe nenhuma parte no texto que tenha dois caracteres entre o 1 e o 2

console.log(texto.match(/1..2/g))

const notas = '8.3,7.1,8.8,10.0'

// Encontrando qualquer coisa que comece com 8 e pegando as duas próximas casas

console.log(notas.match(/8../g))

// Encontrando qualquer coisa que tenha . no meio

console.log(notas.match(/.\../g))