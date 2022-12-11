const texto = 'a   b'

console.log(texto.match(/a\s\s\sb/))

// Outras possibilidades

console.log(texto.match(/a   b/))
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s{3}b/))