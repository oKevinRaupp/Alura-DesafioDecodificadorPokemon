let imagemProcurando = document.querySelector("#imagem__direta");
let titulo = document.querySelector(".direita__div__titulo");
let paragrafo = document.querySelector(".direita__div__texto");
let resposta = document.querySelector(".direita__div__reposta");
let copiar = document.querySelector("#btn-copiar");

function criptografar() {
    let stringCriptografada = document.querySelector('#input').value;

    stringCriptografada = stringCriptografada
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    imagemProcurando.remove();
    titulo.remove();
    paragrafo.remove();

    if (!stringCriptografada) stringCriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringCriptografada;
}

function descriptografar() {
    let stringDescriptografada = document.querySelector("#input").value;

    stringDescriptografada = stringDescriptografada.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");

    imagemProcurando.remove();
    titulo.remove();
    paragrafo.remove();

    if (!stringDescriptografada) stringDescriptografada = 'Nenhuma mensagem, tente novamente! ';

    copiar.removeAttribute("hidden");

    resposta.innerHTML = stringDescriptografada;
}
z

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