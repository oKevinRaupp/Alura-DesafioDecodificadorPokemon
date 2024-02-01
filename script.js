let imagemDireita = document.querySelector("#imagem__direta");
let titulo = document.querySelector(".direita__div__titulo");
let paragrafo = document.querySelector(".direita__div__texto");
let resposta = document.querySelector(".direita__div__reposta__paragrafo");
let copiar = document.querySelector("#btn-copiar");

var novaImagemDireitaCriptografada = "assets/haunter-segredo-guardado.png";
var novaImagemDireitaDescriptografada = "assets/gengar-segredo-descoberto1.png";

function criptografar() {
    let stringCriptografada = document.querySelector('#input').value;

    stringCriptografada = stringCriptografada
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    trocarImagem(novaImagemDireitaCriptografada);

    titulo.innerHTML = "Seu segredo está guardado MUAHAHAHA!";
    paragrafo.remove();

    if (!stringCriptografada) stringCriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringCriptografada;
}

function descriptografar() {
    let stringDescriptografada = document.querySelector("#input").value;

    stringDescriptografada = stringDescriptografada.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    trocarImagem(novaImagemDireitaDescriptografada);

    titulo.innerHTML = "Seu segredo foi descoberto HEHEHEHE!";
    paragrafo.remove();

    if (!stringDescriptografada) stringDescriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringDescriptografada;
}

function trocarImagem(imagem) {
    imagemDireita.src = imagem;
}

function copiarTexto() {
    navigator.clipboard.writeText(resposta.innerHTML).then(() => copiar.innerHTML = "Texto copiado!");

    limparInput();

    setTimeout(function () {
        copiar.innerHTML = "Copiar texto"
    }, 2000)
}

function limparInput() {
    let input = document.querySelector(".input");
    input.value = "";
}