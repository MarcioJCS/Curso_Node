const {EventEmitter} = require('events');

class Evento extends EventEmitter{}
const meuEvento = new Evento ();

//subscriber - assinamte
meuEvento.on('seguranca',(x,y)=>{
    console.log(`Executando o evento 'seguranca':${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('seguranca','userAdmin','Alterou salário')

 meuEvento.on('encerrar',(dados) =>{
     console.log('Assinante: ' + dados)
 })

 meuEvento.emit('encerrar','Encerrando a execução da importação de dados')