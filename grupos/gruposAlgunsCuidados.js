const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // Dentro de um conjunto, um grupo não existe
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)+/gi))