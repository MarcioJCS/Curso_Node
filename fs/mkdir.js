//Criando diretórios
const fs = require('fs')
const assets = ['css','js','images','fonts','lib'] //criando todas as pastas que podem conter dentro de um projeto

function make(dir){
    dir.forEach((item)=> {
        
        fs.mkdir(`projeto/assets/${item}`,{recursive: true} ,(err)=>{
            if (err) throw err;
            console.log('Diretório criado com sucesso: ' ,item)
        })
    })

}

make(assets)
//quando uso o recursive: true ele permite criar todos os diretórios que não existem