const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de NodeJS')

console.log (buf.toString())
console.log (buf.toString('utf16le'))

const buf_String = Buffer.from('Carregando uma string','utf8')

console.log(buf_String.toString())

console.log(Buffer.isBuffer(buf_String))
console.log(buf_String.toString('utf-8', 0 , 10))//executa carregando da posição 0 a 10