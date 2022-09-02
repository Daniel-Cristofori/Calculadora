var elementoPainel = document.getElementById("painel");
var calculosResultantes = document.getElementById("campoCalculos");


// lista que esta armazenando os cálculos
var valorCalculos = [];

// valor do botão selecionado
var valorBotao;


// função que adiciona valor de botão selecionado no painel
function adicionarNumero(valorBotao) {

    elementoPainel.value += valorBotao;
        
}


// função que realiza o calculo   
function calculo(){

    let resultado1 = elementoPainel.value;
    let resultado2 = eval(resultado1);

    elementoPainel.value = resultado2;
    

    let valorFinal = (resultado1 + ' = ' + resultado2 );

        valorCalculos.push(valorFinal);
        calculosResultantes.innerHTML = "";


    // adicionado resultado em campo de calculos 
    for(var i = 0; i < valorCalculos.length; i++){

        calculosResultantes.innerHTML +=  valorCalculos[i] + '<br>';

    }      
}


// função que exclui apenas um caractere no painel
function excluir(){

    elementoPainel.value = elementoPainel.value.substring(0, elementoPainel.value.length-1);

}


// função que exclui todos os caractere no painel
function deletar(){

    elementoPainel.value = "";

}
