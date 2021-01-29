require('./subdirectory/sub')
console.log('-----------')
console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do Arquivo: `, __dirname)
console.log(`Diretório em que foi invocado:`, process.cwd())
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário no Sistema Operacional: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do Server: `, process.env.COMPUTERNAME)

switch(process.argv[2]){

    case '-a' :
        console.log('Execute rotina principal');
    break;

    case '-i' :
        console.log('Execute instalação');
        break;

        case '-q' :
            console.log('Encerrando aplicação');
            process.exit();//interrompe imediatamente o código
            break;

            default :
            console.log('Parâmetro Invalido');
}
console.log(`Ambiente do Servidor: `, process.platform)

/*
Process -> sempre tras a pasta onde estamos chamando o arquivo
Dirname -> sempre tras a pasta onde está o arquivo fonte
*/