class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    éSequencia(){
        return this.cpfLimpo.charArt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial)
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1)
        this.novoCPF = cpfParcial + digito1 + digito2;
    }
    //quando se nao utiliza this na função, ela pode ser static
    static geraDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length +1;

        for(let stringNumerica of cpfParcial){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.éSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

const validaCPF = new ValidaCPF('407.726.848-63');

if(validaCPF.valida()){
    console.log('CPF valido');
}else{
    console.log('CPF invalido');
}