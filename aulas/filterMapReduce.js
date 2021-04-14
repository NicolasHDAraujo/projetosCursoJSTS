const numeros = [ 5, 50, 55, 110, 125, 1111, 1, 50, 27, 12, 30, 27];

//Filter sempre retorna um array com a mesma quantidade de elementos ou menos
const numeros2 = numeros.filter(valor => valor > 10);
console.log(numeros2);

const pessoas = [
    {nome: 'Joao', idade: 22},
    {nome: 'Maria', idade: 40},
    {nome: 'Jose', idade: 12},
    {nome: 'Juca', idade: 30},
    {nome: 'Nicolas', idade: 26},
    {nome: 'Jessica', idade: 23},
]

const pessoas2 = pessoas.filter(obj => obj.nome.length>= 5);
console.log(pessoas2);

const pessoaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));//ultima letra do nome A

//MAP

const numerosEmDobro = numeros.map( valor => valor * 2);

const nomes = pessoas.map( obj => obj.nome);
const idades = pessoas.map(obj => ({idade : obj.idade}));
const id = pessoas.map((obj, index) => {
    obj.id = (index +1);
    return obj;
});

//REDUCE
const total = numeros.reduce((acumulador, valor) => {
    acumulador = acumulador + valor;
}, 0);//valor inicial do acumulador opcional

console.log(total);

const maisVelha = pessoas.reduce((acumulador, valor) => acumulador.idade >= valor.idade ? acumulador : acumulador = idade);

console.log(maisVelha);

//FOREACH
numeros.forEach((valor) => console.log(valor));