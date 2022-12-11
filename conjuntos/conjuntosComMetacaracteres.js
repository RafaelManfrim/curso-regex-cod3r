const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // Não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // Isso é um intervalo válido

// Isso não é um intervalo
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// Pode precisar de escape: [ ] - ^
