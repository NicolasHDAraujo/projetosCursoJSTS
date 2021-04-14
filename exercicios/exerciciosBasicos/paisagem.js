const ePaisagem = (altura, largura) => altura >= largura ? 'Retrato' : 'Paisagem';

console.log(ePaisagem(20, 5));

//Exercicio FizzBuzz
function fizzBuzz(n){
    if(typeof n !== Number) return n;
    if (n % 3 === 0 && n % 5 === 0) return 'Fizz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

for (let i = 0; i <=100; i++){
    console.log(i, fizzBuzz(i));
}