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