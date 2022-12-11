const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande123456789

#essaSenhaEGrande123
#OpA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm)) // Seleciona senhas com 6 a 20 caracteres
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm)) // Seleciona senhas com 6 a 20 caracteres e pelo menos uma letra maiúscula
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm)) // Seleciona senhas com 6 a 20 caracteres e pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial