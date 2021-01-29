const EventEmitter = require('events');

class Evento extends EventEmitter{}
const meuEvento = new Evento ();

meuEvento.on('seguranca',(x,y)=>{
    console.log(`Executando o evento 'seguranca':${x} ${y}`)
})

meuEvento.emit('seguranca','userAdmin','Alterou salário')

//on criamos um evento
//emit chamamos o evento