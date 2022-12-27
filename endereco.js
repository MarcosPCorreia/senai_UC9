class Endereco {
    
    constructor(logradouro, cep, bairro, cidade, estado) {
        this.logradouro = logradouro;
        this.cep = cep;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    //Getters e Setters
    get Logradouro() { return this.logradouro; }
    set Logradouro (logradouro) { this.logradouro = logradouro; }

    get Cep() { return this.cep; }
    set Cep (cep) { this.cep = cep; }

    get Bairro() { return this.bairro; }
    set Bairro (bairro) { this.bairro = bairro; }

    get Cidade() { return this.cidade; }
    set Cidade (cidade) { this.cidade = cidade; }

    get Estado() { return this.estado; }
    set Estado (estado) { this.estado = estado; }

    // Metodo ToString
    toString(){
        return `Logradouro: ${this.logradouro}\nCep: ${this.cep}\nBairro: ${this.bairro}\nCidade: ${this.cidade}\nEstado: ${this.estado}\n`
    }
}

module.exports = Endereco;