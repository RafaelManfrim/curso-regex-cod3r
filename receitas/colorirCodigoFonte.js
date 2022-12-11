const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read("index.html")

const codeRegex = /<code>[\s\S]*<\/code>/i

let codigo = texto.match(codeRegex)[0]

// Capturando strings
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// Capturando palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

// Capturando tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1285e2')

// Comentário de uma linha
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// Comentário de multiplas linhas
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('index.html', conteudoFinal)