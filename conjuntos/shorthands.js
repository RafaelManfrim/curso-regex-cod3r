const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) // Equivale a [0-9] (Números)
console.log(texto.match(/\D/g)) // Equivale a [^0-9] (Não números)

console.log(texto.match(/\w/g)) // Equivale a [a-zA-Z0-9_] (Caracteres)
console.log(texto.match(/\W/g)) // Equivale a [^a-zA-Z0-9_] (Não caracteres)

console.log(texto.match(/\s/g)) // Equivale a [ \t\n\r\f] (Espaços)
console.log(texto.match(/\S/g)) // Equivale a [^ \t\n\r\f] (Não espaços)