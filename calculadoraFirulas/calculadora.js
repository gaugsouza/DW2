cont = 0;
// Função que adiciona os números no Visor quando pressionado os botões
function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }
 
 // Função que limpa a calculadora e todas as variáveis existentes.
 function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
 }
 
 // Função que executa as operações básicas da calculadora
 function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (oper == "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (oper == "multiplicar") {
             var valor = valor1 * valor2;
          } else {
             if(oper == "dividir"){
                var valor = valor1 / valor2;
             } else {
                var valor = Math.pow(valor1,valor2);
             }
                
          }
       }
    }
 
    return(valor);
 }
 
 // Função do algoritmo de "passagem" das ações do usuário
 function calcParse(oper) {
    var valor = document.calcform.visor.value;
    delete gvisor;
 
    if (typeof goper != 'undefined' && oper == 'resultado') {
       gvalor = calcOper(goper, gvalor, valor);
       document.calcform.visor.value = gvalor;
       delete oper;
       delete gvalor;
       return(0);
    }
 
    if (typeof gvalor != 'undefined') {
       gvalor = calcOper(goper, gvalor, valor);
       goper = oper;
       document.calcform.visor.value = gvalor;
    } else {
       gvalor = valor;
       goper = oper;
    }
 }

 function alternar(){
    let paiDiv = document.getElementById("tdDiv");
    let paiMult = document.getElementById("tdMult");    

    if(cont == 0){    
        paiDiv.innerHTML = '<input type="button" name="limpar" class="oper" value="AC" onclick="calcLimpar()" />';
        paiMult.innerHTML = '<input type="button" name="elevar" class="oper" value="^" onclick="calcParse(\'elevar\')" />';
        cont++;
    } else{
        paiDiv.innerHTML = '<input type="button" name="dividir" class="oper" value="/" onclick="calcParse(\'dividir\')" />';
        paiMult.innerHTML = '<input type="button" name="multiplicar" class="oper" value="*" onclick="calcParse(\'multiplicar\')" />';
        cont--;
    }
 }