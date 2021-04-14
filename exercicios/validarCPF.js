//let cpf = '407.726.848-63';
//let cpfLimpo = cpf.replace(/\D+/g, '');
//cpfArray = Array.from(cpfLimpo);
//console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

const validaCpf = (cpfEnviado) =>{
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

validaCpf.prototype.valida = () => {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    
    return novoCpf === this.cpfLimpo;
}

validaCpf.prototype.criaDigito = (cpfParcial) =>{
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac+=(regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : 'digito';
};

validaCpf.prototype.isSequencia = () => {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new validaCpf('407.726.848-63');

if(cpf.valida()){
    console.log('cpf Valido')
} else{
    console.log('cpf invalido')
}