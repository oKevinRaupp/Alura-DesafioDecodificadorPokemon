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

    if (verificarMaiuscularOuAcento(stringCriptografada)) {
        alert("Atenção, letras maiúsculas ou com acentos NÃO serão criptografadas.");
    }

    if (!stringCriptografada) {
        limparTela(imagemDireita, titulo, paragrafo);
        copiar.style.display = "none";

        stringCriptografada = 'Nenhuma mensagem, tente novamente! ';

        resposta.innerHTML = stringCriptografada;
    } else {
        voltarTela(imagemDireita, titulo, paragrafo);
        trocarImagem(novaImagemDireitaCriptografada);
        paragrafo.remove();
        copiar.style.display = "block";

        titulo.innerHTML = "Seu segredo está guardado MUAHAHAHA!";

        resposta.innerHTML = stringCriptografada;
    }
}

function descriptografar() {
    let stringDescriptografada = document.querySelector("#input").value;

    stringDescriptografada = stringDescriptografada
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    if (verificarMaiuscularOuAcento(stringDescriptografada)) {
        alert("Atenção, letras maiúsculas ou com acentos NÃO serão descriptografadas.");
    }

    if (!stringDescriptografada) {
        limparTela(imagemDireita, titulo, paragrafo);
        copiar.style.display = "none";

        stringDescriptografada = 'Nenhuma mensagem, tente novamente! ';

        resposta.innerHTML = stringDescriptografada;
    } else {
        voltarTela(imagemDireita, titulo, paragrafo);
        trocarImagem(novaImagemDireitaDescriptografada);
        paragrafo.remove();
        copiar.style.display = "block";

        titulo.innerHTML = "Seu segredo foi descoberto HEHEHEHE!";

        resposta.innerHTML = stringDescriptografada;
    }
}

function trocarImagem(imagem) {
    imagemDireita.src = imagem;
}

function copiarTexto() {
    navigator.clipboard.writeText(resposta.innerHTML).then(() => copiar.innerHTML = "Texto copiado!");

    limparInput();

    setTimeout(function () {
        copiar.innerHTML = "Copiar texto";
    }, 2000)
}

function limparInput() {
    let input = document.querySelector(".input");
    input.value = "";
}

function limparTela(imagem, titulo, texto) {
    imagem.style.display = "none";
    titulo.style.display = "none";
    texto.style.display = "none";
}

function voltarTela(imagem, titulo, texto) {
    imagem.style.display = "flex";
    titulo.style.display = "flex";
    texto.style.display = "flex";
}

function verificarMaiuscularOuAcento(texto) {
    const regexMaiuscula = /[A-Z]/;
    const regexAcentuacao = /[áàãâéèêíïóôõöúüç]/i;
    return regexMaiuscula.test(texto) || regexAcentuacao.test(texto);
}