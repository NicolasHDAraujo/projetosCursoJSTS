//condicao ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

//colocando valor padrão a constante
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
