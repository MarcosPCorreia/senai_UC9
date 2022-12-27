const Pessoa = require('./pessoa');

class PessoaJuridica extends Pessoa {
    constructor(nome, endereco, cnpj, razaoSocial) {
        super(nome, endereco);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    //Getters e Setters
    get Cnpj() { return this.cnpj; }
    set Cnpj (cnpj) { this.cnpj = cnpj; }

    get RazaoSocial() { return this.razaoSocial; }
    set RazaoSocial (razaoSocial) { this.razaoSocial = razaoSocial; }

    // Metodo ToString
    toString(){
        return `${super.toString()}CNPJ: ${this.cnpj}\nRazao Social: ${this.razaoSocial}\n`
    }
}

module.exports = PessoaJuridica;