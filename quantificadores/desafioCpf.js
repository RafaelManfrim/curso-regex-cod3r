const texto = `
CPF dos aprovados:
    - 60056789012 VÁLIDO
    - 600567890121 INVÁLIDO
    - 600.567.890-12 VÁLIDO
    - 765.998.345-23 VÁLIDO
    - 454.674.333-21 VÁLIDO
    - 678.987.123-87 VÁLIDO
    - 789.112.543-00 VÁLIDO
    - 789.112.543-002 INVÁLIDO
    - 789.12.543-02 INVÁLIDO
    - 789.1267.543-02 INVÁLIDO
`

console.log(texto.match(/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g)) // Pega somente os que estão no formato correto

console.log(texto.match(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g)) // Pega também se estiver mal formatado