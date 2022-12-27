
class CadastroTela{

    static cadastroClientesTexto(){

        console.log("----------------------------------")
        console.log("      CADASTRO DE CLIENTES        ")
        console.log("----------------------------------")
        console.log("")
    }
    
    static tipoPessoaTexto(){
        
        console.log("---------TIPO DE PESSOA----------")
        console.log("      1 - PESSOA FÍSICA        ")
        console.log("      2 - PESSOA JURÍDICA        ")
        console.log("      S - SAIR        ")
        console.log("----------------------------------")
}
    static telaContinuarTexto(){
        console.log("  Escolha uma opcao: \n")
        console.log("    C - CONTINUAR")
        console.log("    S - SAIR")
    }

    static NovoCadastroTexto(){
        console.log("  Deseja realizar um novo cadastro? \n")
        console.log("    C - CONTINUAR")
        console.log("    S - SAIR")
}

}

module.exports = CadastroTela;