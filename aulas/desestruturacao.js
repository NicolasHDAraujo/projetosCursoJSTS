//exemplos de atribuição via desestruturação

const numero = [1,2,3,4,5,6,7,8,9];

const [primeiroNumero, segundoNumero, ...resto] = numero;//operador rest/spread

//objeto
const pessoa ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome } = pessoa;
console.log(nome);

const {
    endereco: {rua: r = 12345, numero}
}

const {nome, ...resto} = pessoa;