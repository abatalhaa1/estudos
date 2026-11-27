function temDesconto (temCupom, clienteFrequente){

    if (temCupom === true || clienteFrequente === true){
        return ("a pessoa recebeu o desconto pelo cupom ou por ser cliente frequente")
    }
    else {
        return ("A pessoa não recebeu nenhum desconto")
    }
}

console.log (temDesconto(true,false));