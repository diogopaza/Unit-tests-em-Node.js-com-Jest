function aplicarDesconto(valor, desconto){
    if(desconto > valor) return 0;
    return valor - desconto;
}

function aplicarDescontoTeste(){
    return aplicarDesconto(10,2) === 8;
}

function aplicarGrandeDescontoTeste(){
    return aplicarDesconto(10,20) === 0;
}

console.log('A aplicação de desconto está funcionando?');
console.log(aplicarDescontoTeste());
console.log(aplicarGrandeDescontoTeste());