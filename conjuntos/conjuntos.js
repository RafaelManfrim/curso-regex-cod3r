const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para se definir uma classe de caracteres ou conjunto usa-se []

console.log(texto.match(/[02468]/g))

const texto2 = 'João não vai passear na moto.'

console.log(texto2.match(/n[aã]/g))