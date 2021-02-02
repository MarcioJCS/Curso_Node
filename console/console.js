console.log('Exibindo uma mensagem no console')

//erro

console.error(new Error('Exibindo uma mensagem de erro , temos problemas'))


const carros =['GM','FIAT','FORD','VW','Renault','Honda','Hyundai']

console.table(carros)/*exibe o conteúdo em forma de linhas e tabelas, 
 indicando seus indices
 Tem grande valia na área  pois  facilita  a criação de tabelas
 Podendo assim gerar tabelas de acordo com os dados digitados no sistema */

 const dados = {name: 'Marcio Jose', empresa:'Vivo'}

 console.table(dados)

 console.count('processo')//contando a quantidade de execução de um determinado processo
 console.count('processo')//contando a quantidade de execução de um determinado processo
 console.count('processo')//contando a quantidade de execução de um determinado processo

 console.log('Resetando o processo')
 console.countReset('processo')

 console.count('processo')


 console.time('contador')
for(let index= 0; index < 100; index ++){
   // console.log('-')
}
 console.timeEnd('contador')

 console.assert(true ,'Faça alguma coisa' )

 console.assert(false, 'Ih Rapaz %s, que pena!', 'Não funcionou')
 //%s está informando que vou mandar uma string esse sinal é chamado de string formatada

 //limpa todos os dados do console
 //console.clear()