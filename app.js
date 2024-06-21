let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Exibe a mensagem inicial
exibirMensagemInicial();

function modificarElementoHTML(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});

}

function exibirMensagemInicial() {
    modificarElementoHTML("h1", "Jogo do número secreto");
    modificarElementoHTML("p", `Escolha um número entre 1 e ${numeroLimite}`);

}


function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute);

    if (chute == numeroSecreto){

        modificarElementoHTML("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        
        modificarElementoHTML("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else { 
        if (chute > numeroSecreto){
            modificarElementoHTML("p", "O número secreto é menor");

        } else {
            modificarElementoHTML("p", "O número secreto é maior");

        }
        tentativas++;
        limparCampo();
    }
}


function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = numerosSorteados.length;

    
        if (quantidadeDeElementosNaLista == numeroLimite){
            numerosSorteados = [];
           
        }

    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();

    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
        chute = document.querySelector("input");
        chute.value = '';

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}
