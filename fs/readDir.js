//Lendo diretórios
const fs = require ('fs')

//utilizando o FS para leitura de um diretório
fs.readdir(__dirname, (err,data) =>{
    if(err) throw err;

    data.forEach((files)=>{
        console.log(__dirname +'\\' + files);
    })
})