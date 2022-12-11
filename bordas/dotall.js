const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi)) // [\s\S] Seleciona tudo, da mesma forma que o ., mas com o \n