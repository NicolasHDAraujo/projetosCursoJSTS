//For classico- geralmente com interaveis (array ou string)
//For in - Retorna o indice ou a chave( string, array ou obj)
//For of - Retorna o valor em si( string, array ou interaveis)

// for in
const frutas = ['pera', 'uva', 'maça'];

for (let i in frutas){//lê os indices do array
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Mateus',
    idade: 30
}

for (let i in pessoa){
    console.log(pessoa[i]);
}

const nome = 'Nicolas Araujo';

for( let valor of nome){//funciona tanto com strings, quanto com array
    console.log(valor);
}

//percorrer array
frutas.forEach(function (element, index, array){
    console.log(element, index, array);
});