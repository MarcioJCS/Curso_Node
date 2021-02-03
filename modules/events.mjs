import {EventEmitter} from  'events'

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

 //trabalhando com modulo no Node temos que criar um arquivo com a extensão mjs
 /* a chamada pelo node também será diferente chamamos da seguinte forma:
  node --experimental-modules events.mjs*/