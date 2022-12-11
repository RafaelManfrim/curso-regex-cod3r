const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log(texto.split(/,/))

console.log(texto.match(/,/))

console.log(texto.match(/,/g))

console.log(texto.match(/A/))

console.log(texto.match(/A/i))

console.log(texto.match(/2/))

console.log(texto.match(/b c!/))