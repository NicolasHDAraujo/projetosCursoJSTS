function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){//função que simula algo que demora, só para simular o mundo real
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

//
//esperaAi('Fase 1', rand())
  //  .then(valor => {
    //    console.log(valor)
      //  return esperaAi('Fase 2', rand());
    //})
    //.then( fase => {
      //  console.log(fase);
        //return esperaAi('Fase', rand());
    //})
   // .then( fase => console.log(fase))
   // .catch(e => console.log(e));

   async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);   

    } catch(e){
        console.log(e);
    }
}
executa();