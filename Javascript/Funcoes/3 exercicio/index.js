let resultado = document.querySelector('.resultado');

let numero1 = Number(prompt('Digite um numero'));

let numero2 = Number(prompt("Digite outro numero"));

function calcular(operador){
    
    switch(operador) {
        case '+':
            resultado.innerHTML = numero1 + numero2;
        break;

        case '-':
            resultado.innerHTML =  numero1 - numero2;
        break;

        case '*':
            resultado.innerHTML = numero1 * numero2;
        break;

        case '/':
            resultado.innerHTML = numero1 / numero2;
    }
    
   
}
