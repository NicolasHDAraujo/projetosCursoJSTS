const Conta = (agencia, conta, saldo) =>{
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = (valor) => {
    if(valor > this.saldo) {
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = (valor) => {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = () => {
    console.log(`Ag.: ${this.agencia}/${this.conta} |` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

const ContaCorrente = (agencia, conta, saldo, limite) =>{
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = (valor) => {
    if(valor > this.saldo + this.limite) {
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

const ContaPoupanca = (agencia, conta, saldo, limite) =>{
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

