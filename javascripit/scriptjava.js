
function ex_01() {
    var n1, n2, maior, menor;
    var n1 = Number(prompt("Escreva um numero Inteiro"));
    var n2 = Number(prompt("Escreva um numero Inteiro"));

    if ((n1 > n2)) {
        maior = n1;
        menor = n2;
    }
    else {
        maior = n2;
        menor = n1;
    }

    document.getElementById('resultado').innerHTML = `Resultado é ${menor},${maior}.`
}

function ex_02() {
    var altura, genero, peso_ideal;
    var altura = Number(prompt("Qual Sua Altura ?"));
    var genero = (prompt("Qual Seu Gênero?"));


    if ((genero == "feminino")) {
        peso_ideal = (altura * 62.1) - 44.7;
    }
    else {
        genero = "masculino"
        peso_ideal = (altura * 72.7) - 58;
    }

    document.getElementById('resultado').innerHTML = `Sua altura é ${altura}, e para o genero ${genero}, seu peso ideal é ${peso_ideal}.`
}

function ex_03() {
    var n1,n2,n3,maior,meio, menor;
    var n1 = Number(prompt("Escreva um numero Inteiro"));
    var n2 = Number(prompt("Escreva um numero Inteiro"));
    var n3 = Number(prompt("Escreva um numero Inteiro"));

    if ((n1 > n2) && (n1 > n3)) {
        maior = n1;
        if (n2 < n3) {
            meio = n3
            menor = n2
        }
        else{
            meio = n2
            menor = n3
        }
    }
    else if ((n2 > n1) && (n2 > n3)) {
        maior = n2;
        if (n1 < n3) {
            meio = n3
            menor = n1 }
        else {  
            meio = n1
            menor = n3    
            }
        }
    else if ((n3 > n1) && (n3 > n2)) {
            maior = n3;
            if (n1 < n2) {
                meio = n2
                menor = n1 }
            else {  
                meio = n1
                menor = n2   
                }
            }
    document.getElementById('resultado').innerHTML = `o menor valor é : ${menor}.`
}   

function ex_04() {
    var n1 = prompt("Digite um numero");
    if(n1>0){
    var total = n1/2;

    if(n1 & 1){
        alert("Impar");
    } else {
        alert("Par");
    }}
    else{
    var total = n1
    }

    document.getElementById('resultado').innerHTML = `o valor inserido é : ${total}.`
}  

function ex_05() {
    var n1,n2,n3,resultado;
    var n1 = prompt("Digite um numero");
    var n2 = 2;
    var n3 = 3;

    if ((n1 % n2) == 0) {
        resultado= "É divisivel por Dois";
    }else {
        resultado= "Não divisivel por Dois";
    
    }  
    if ((n1 % n3) == 0) {
        resultado2= "É divisivel por Três";
    }else {
        resultado2= "Não divisivel por Três";
    
    } 
document.getElementById('resultado').innerHTML = `${n1} ${resultado} | ${n1} ${resultado2}.`
}

function ex_06() {
    var n1,n2,n3,resultado;
    var n1 = prompt("Digite um numero");
    var n2 = 2;
    var n3 = 7;

    if ((n1 % n2) == 0 ||(n1 % n3) == 0 ) {
        resultado= "É divisivel por Dois  ou Sete ";
    }else {
        resultado= "Não divisivel por Dois ou  Sete";
    
    }
document.getElementById('resultado').innerHTML = `${n1} ${resultado}`
}

function ex_07(){
    
    var numero = Number(prompt("Digite um numero de 1 até 7"));
    var resultado;
    var dia_semana = numero

    switch(dia_semana){
        case 1: resultado = "Domingo";
        break;

        case 2: resultado = "Segunda-feira";
        break;

        case 3: resultado = "Terça-feira";
        break;

        case 4: resultado = "Quarta-feira";
        break;
        
        case 5: resultado = "Quinta-feira";
        break;
        
        case 6: resultado = "Sexta-feira";
        break;

        case 7: resultado = "Sábado";
        break;

        default: resultado = "Dia Invalido";
        break;
        }


    document.getElementById("resultado").innerHTML = ` Você Digitou ${dia_semana} ,Corresponde ao dia da semana : ${resultado}`;
}

function ex_08(){
    
    var n1, soma;
    soma = 0;
     for( n1= 1; n1 <= 20 ;n1++){
         if( n1 % 2 == 0){
            soma+=n1
         }
         
     }
    //window.alert("o Resultado é :"+ soma);

    document.getElementById("resultado").innerHTML= `A Soma entre todos os Numeros Pares Entre 1 e 20 o resultado é ${soma}.`
}