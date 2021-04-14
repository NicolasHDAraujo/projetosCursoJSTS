//Funções construtoras retornam objeto, o mesmo que factory
//Na construtora é necessário sempre iniciar com MAIUSCULO --> Pessoa (new)

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log(this.nome + ': sou um metodo');
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();

//exercicio calculadora
const Calculadora = () =>{
    this.display = document.querySelector('display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () =>{
        document.addEventListener('click', e =>{
            const el = e.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval (this.display.value);

            if(!conta){
                alert('Conta invalida');
                return;
            }
            this.display.value = conta;
        } catch(e){
            alert ('Conta invalida');
            return;
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();    
    }
    this.clear = (el) => this.display.value ='';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();

//função recursiva
const recursiva = (max) =>{
    if( max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(1);

//funçao geradora
function* geradora1(){

    yield 'Valor1';

    yield 'Valor2';

    yield 'Valor3';
}

const g1 = geradora1();
console.log(g1.next().value);

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    };
}

yield function(){
    console.log('Vim do y2');
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();