const fs = require('fs');

const read = relativePath => {
  return fs.readFileSync(`${__dirname}/originais/${relativePath}`, { encoding: 'utf8' })
}

const write = (relativePath, content) => {
  const dirname = __dirname + '/alterados'

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }

  fs.writeFileSync(`${dirname}/${relativePath}`, content, { encoding: 'utf8' })
}

module.exports = {
  read, write
}