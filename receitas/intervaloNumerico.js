
const texto = '0 1 10 192 199 201 249 255 256 299 312 1010 1512'

// Selecionar números entre 0-255

console.log(texto.match(/\b(\d{1,2})\b/g)) // Seleciona números com dois digitos
console.log(texto.match(/\b(\d{1,2}|1\d{2})\b/g)) // Seleciona o mesmo que o anterior + números na casa dos 100
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d)\b/g)) // Seleciona o mesmo que o anterior + números até 249
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g)) // Seleciona o mesmo que o anterior + números até 255