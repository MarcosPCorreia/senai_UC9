const Pessoa = require('./pessoa');

class PessoaFisica extends Pessoa {
    constructor(nome, cpf, dataNascimento, endereco) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    //Getters e Setters
    get Cpf() { return this.cpf; }
    set Cpf (cpf) { this.cpf = cpf; }

    get DataNascimento() { return this.dataNascimento; }
    set DataNascimento (dataNascimento) { this.dataNascimento = dataNascimento; }

    // Metodo ToString
    toString(){
        return `\nCPF: ${this.cpf}\n${super.toString()}Data Nascimento:${this.dataNascimento}`
    }
}


module.exports = PessoaFisica;