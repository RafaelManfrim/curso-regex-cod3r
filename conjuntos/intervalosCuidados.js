const texto = "ABC [abc] a-c 1234"

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // Não define um range

console.log(texto.match(/[A-z]/g)) // O intervalo usa a ordem da Tabela Unicode

// console.log(texto.match(/[z-A]/g))
// console.log(texto.match(/[4-1]/g))

// O intervalo tem que respeitar a ordem na tabela unicode

// Link https://unicode-table.com/pt/