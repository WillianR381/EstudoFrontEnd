let output = document.querySelector('#output');

let mensagem = '';
function mostarTabuada(){
    let numero = Number(prompt('Digite um numero'));

    limparTabuada();

    for(let i = 0; i <= 1000; i++){
        let multiplicador = numero * i; 
       mensagem += `${numero} x ${i} = ${multiplicador} <br>`;
    }
    output.innerHTML = mensagem;
}

function limparTabuada(){
    mensagem = '';
    output.innerHTML = mensagem ;
}