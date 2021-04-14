const form = document.querySelector('#form')
//capturar o evento, prevenir o formulario, capturar os dados do input, gerar as funções e testes de valores
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const peso = e.target.querySelector('#peso')
    const altura = e.target.querySelector('#altura')

    const pesoValor = Number(peso.value)
    const alturaValor = Number(altura.value)

    if(!pesoValor){
        setResultado('Peso invalido', false)
        return
    }
    if(!alturaValor){
        setResultado('Altura invalida', false)
        return
    }

    const imc = getImc(pesoValor, alturaValor)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    
    setResultado(msg, true);
})
//array com as mensagens de valores e testes de if para retorno dos valores
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if(imc >= 39.9){
        return nivel[5]
    }
    
    if(imc >= 34.9){
        return nivel[4]
    }
    
    if(imc >= 29.9){
        return nivel[3]
    }
    
    if(imc >= 24.9){
        return nivel[2]
    }
    
    if(imc >= 18.5){
        return nivel[1]
    }
    
    if(imc < 18.5){
        return nivel[0]
    }
}
//calcular o imc
function getImc(pesoValor, alturaValor) {
    const imc = pesoValor / alturaValor ** 2;
    return imc.toFixed(2)
}
//criar um paragrafo
function criaP(){
    const p = document.createElement('p')
    return p
}
//setar o resultado, retornando se é valido ou não, adcionando o p e classe com a msg
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '' 

    const p = criaP()

    if(isValid){
        p.classList.add('paragrafoResultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}