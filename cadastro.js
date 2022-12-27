const pessoaJuridica = require("./pessoaJuridica");
const pessoaFisica = require("./pessoaFisica");
const Endereco = require("./endereco");
const telaCadastro = require("./telaCadastro");

class Cadastro{

    static tipoPessoa(opcao){
        this.opcao = String(opcao).toUpperCase();
        while (this.opcao != 'S'){
            if (this.opcao == 1) {
                this.opcao1();
            } else if (this.opcao == 2) {
                this.opcao2();
            } else if (this.opcao == 'C') {
                console.clear();
                this.menu();
            } else if (this.opcao == 'S') {
                break;
            }
        }
        console.clear();
    }

    static opcao1(){
        console.log("\nVocê escolheu Pessoa Física\n");
        this.cadastrarPessoaFisica(new pessoaFisica);
        console.log("\nCadastro realizado com sucesso!\n");
        this.opcao = readlineSync.question(telaCadastro.NovoCadastroTexto()).toUpperCase();
    }

    static opcao2(){
        console.log("\nVocê escolheu Pessoa Jurídica\n")
        this.cadastrarPessoaJuridica(new pessoaJuridica);
        console.log("\nCadastro realizado com sucesso!\n");
        this.opcao = readlineSync.question(telaCadastro.NovoCadastroTexto()).toUpperCase();
    }

    static menu(){
        telaCadastro.cadastroClientesTexto();
        telaCadastro.tipoPessoaTexto();
        this.opcao = readlineSync.question("Informe o tipo de pessoa a ser cadastrada: ").toUpperCase();
    }
    
    static cadastrarPessoaFisica = function(tipoPessoa) {
        tipoPessoa.nome = readlineSync.question("Informe o nome da pessoa:  ");
        tipoPessoa.cpf = readlineSync.question("Informe o CPF da pessoa:  ");
        tipoPessoa.dataNascimento = readlineSync.question("Informe a data de nascimento da pessoa:  ");
        tipoPessoa.endereco = this.cadastrarEndereco();
        console.clear();
        console.log(tipoPessoa.toString());
    }

    static cadastrarPessoaJuridica = function(tipoPessoa) {
        tipoPessoa.nome = readlineSync.question("Informe o nome da empresa:  ");
        tipoPessoa.cnpj = readlineSync.question("Informe o CNPJ:  ");
        tipoPessoa.razaoSocial = readlineSync.question("Informe a razao social:  ");
        tipoPessoa.endereco = this.cadastrarEndereco()
        console.clear();
        console.log(tipoPessoa.toString())
    }

    static cadastrarEndereco = function() {
        let endereco = new Endereco();
        endereco.logradouro = readlineSync.question("Informe o logradouro:  ");
        endereco.cep = readlineSync.question("Informe o cep:  ");
        endereco.bairro = readlineSync.question("Informe o bairro:  ");
        endereco.cidade = readlineSync.question("Informe a cidade:  ");
        endereco.estado = readlineSync.question("Informe o estado:  ");
        return endereco; 
    }
}
module.exports = Cadastro;