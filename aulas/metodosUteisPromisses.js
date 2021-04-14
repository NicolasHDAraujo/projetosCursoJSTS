function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Cai no erro');
            return;
        }
    
        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    'Outro valor'
];

//Promise.all(promises) //tenta resolver todas, se der algum erro ele para
Promise.race(promises)//sempre entrega o primeiro valor resolvido
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    } else{
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    }) 
    .catch(e => console.log(e));