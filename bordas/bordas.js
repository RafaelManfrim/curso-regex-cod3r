const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ Início da linha/string
console.log(texto.match(/r$/gi)) // $ Fim da linha/string

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall, ou seja, o . não encontra o \n