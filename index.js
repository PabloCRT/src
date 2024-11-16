function voltar() {
    const imagem1 = document.getElementById('img1');

    imagem1.onload = function() {
        imagem1.src = 'assets/palco.jpg';
    };

    // Forçar o navegador a recarregar a imagem
    imagem1.src = '';
    imagem1.src = 'assets/palco.jpg';

    document.getElementById('bola1').style.backgroundColor = "#8929a3b4"
    document.getElementById('bola2').style.backgroundColor = "transparent"

//-----------------------------------------------------------

    
}

function avancar() {
    const imagem2 = document.getElementById('img1');

    imagem2.onload = function() {
        imagem2.src = 'assets/bandeira.jpg';
    };

    // Forçar o navegador a recarregar a imagem
    imagem2.src = '';
    imagem2.src = 'assets/bandeira.jpg';

    document.getElementById('bola2').style.backgroundColor = "#8929a3b4"
    document.getElementById('bola1').style.backgroundColor = "transparent"

//-----------------------------------------------------------
}

