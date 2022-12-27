
class Pessoa {
    constructor(nome, Endereco) { 
       this.nome = nome;
       this.endereco = Endereco;
    }

    //Getters e Setters
    get Nome() { return this.nome; }
    set Nome (nome) { this.nome = nome; }

    get Endereco() { return this.endereco; }
    set Endereco (endereco) { this.endereco = endereco; }

    // Metodo ToString
    toString(){
        return `Nome: ${this.nome}\nEndereço:\n${this.endereco}`
    }
}

module.exports = Pessoa;