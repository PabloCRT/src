var imgAtual = "assets/equipe.jpg";
var imgPosterior = "assets/blusa.jpg";

var imgAtual2 = "assets/timeAfilhados.jpg"
var imgPosterior2 = "assets/time.jpg"

function trocar() {
    document.getElementById("primeiraImagem").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgPosterior;
    imgPosterior = aux

    document.getElementById("segundaImagem").src = imgAtual2
    let aux2 = imgAtual2;
    imgAtual2 = imgPosterior2
    imgPosterior2 = aux2
}