readlineSync = require('readline-sync');
const telaCadastro = require("./telaCadastro");
const cadastro = require("./cadastro");

telaCadastro.cadastroClientesTexto();
telaCadastro.tipoPessoaTexto();
cadastro.tipoPessoa(readlineSync.question("Informe o tipo de pessoa a ser cadastrada: "));



