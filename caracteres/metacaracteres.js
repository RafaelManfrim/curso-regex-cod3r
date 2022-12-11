const texto = '1,2,3,4,5,6,a.b c!d?e'

// Usando escape \ para usar metacaractere . como caracter simples

console.log(texto.split(/\./))
console.log(texto.match(/\./))

// Usando metacaractere pipe | (ou)

console.log(texto.match(/,|\.|\?|!| /g))

