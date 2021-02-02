const path = require('path')

console.log('basename' ,path.basename('c:\\temp\\arquivo.html'))
console.log('normalize',path.normalize('c:\\temp/dir//subdir/dir/..'))
console.log('join path', path.join('/teste','teste2','teste3/teste4','dir','..'))
console.log('resolve', path.resolve('path.js'))//resolve traz o caminho absoluto do arquivo
console.log('Extension', path.extname('path.js'))