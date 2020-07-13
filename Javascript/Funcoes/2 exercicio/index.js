let resultado = document.querySelector('.resultado');

let numero1 = Number(prompt('Digite um numero'));

function somar(){
    let numero2 = Number(prompt("Digite outro numero"));
    numero1 += numero2;
    resultado.innerHTML = numero1;
}



function subtrair(){
    let numero2 = Number(prompt("Digite outro numero"));
    numero1 -= numero2;
    resultado.innerHTML = numero1;
}

function multiplicar(){
    let numero2 = Number(prompt("Digite outro numero"));
    numero1 *= numero2;
    resultado.innerHTML = numero1;
}

function dividir(){
    let numero2 = Number(prompt("Digite outro numero"));
    numero1 /= numero2;
    resultado.innerHTML = numero1;
}