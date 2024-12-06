function trocar1(){

    document.getElementById("primeiro").style.backgroundColor="#8929a3b4"
    document.getElementById("segundo").style.backgroundColor="white"
    document.getElementById("terceiro").style.backgroundColor="white"
    document.getElementById("quarto").style.backgroundColor="white"

    const imagem = document.getElementById('imagem');

    imagem1.onload = function() {
        imagem.src = 'assets/premio.jpg';
    };

}



function trocar2(){

    document.getElementById("primeiro").style.backgroundColor="white"
    document.getElementById("segundo").style.backgroundColor="#8929a3b4"
    document.getElementById("terceiro").style.backgroundColor="white"
    document.getElementById("quarto").style.backgroundColor="white"

    const imagem = document.getElementById('imagem');

    imagem1.onload = function() {
        imagem.src = 'assets/premio.jpg';
    };

}