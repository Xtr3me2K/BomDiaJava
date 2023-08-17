let saudacao = "";
const hora = new Date().getHours();
const imagem = document.getElementById("imagem");

if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia!";
} else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

document.getElementById("resultado").textContent = saudacao;