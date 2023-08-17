let saudacao = "";
const horaAtual = new Date().getHours();
const imagem = document.getElementById("imagem");

if (horaAtual >= 6 && horaAtual < 12) {
    saudacao = "Bom dia!";
} else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

document.getElementById("resultado").textContent = saudacao;