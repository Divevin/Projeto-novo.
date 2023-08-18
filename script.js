/*variavel
const nome = "Vinicius" //Constantes

let sobrenome //Mais moderno - exige ser criada antes de usar

var idade // Não exige ser criada antes de usar (nao da erro)

//----------------------
//COMANDOS CONDICIONAIS 
/*
if(CONDICAO){

}


let numero = 100
if(numero > 50){

}else if(numero <10){

}else{

}

//IF TERNÁRIO 
//CONDIÇÃO ? VERDADEIRO : FALSO

numero>50 ? alert("Verdade"): alert("Mentira")

//SWITCH CASE
switch (key) {
    case value:
        
        break;

    default:
        break;
}


//--------------------------------------------------
//Laço de Repetição

//FOR - Mais Organizado - Inicio e fim determinados  

//for(VLR_INICIAL; Condição de Parada; Incremento){}

for(let i=0; i<10; i++){
    //codigos incríveis
}


//WHILE - Mais Maleável - Permite laços INFINITOS
//WHILE(CONDIÇÃO){ Comando que provoca a parada }

while(numero >10){

    numero -- //ou ++ mesma coisa de numero = numero+1
    numero -=10 //Mesma coisa de numero = numero -10

}

//DO... WHILE
do {
    
} while (numero>10);
*/


//--------------------------------------
//FUNCAO

//function nome(parametros){codigos}
let x = 10
let y = 10
/*
function soma(){
    if(x<10){
    return (x+y)
    }else{
        console.log(x+x)
    }
}

let resultado = soma()
console.log(resultado)
*/

//FUNÇÃO ANONIMA-----------------------

//ESTRUTURA
//variavel = Parametros => Codigos

let continha = (valor1, valor2) => {return valor1+valor2}

console.log(continha(4, 10))