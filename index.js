function voltar() {
    const imagem1 = document.getElementById('img1');

    imagem1.onload = function() {
        imagem1.src = 'assets/palco.jpg';
    };
//-----------------------------------------------------------
    // Forçar o navegador a recarregar a imagem
    imagem1.src = '';
    imagem1.src = 'assets/palco.jpg';

    document.getElementById('bola1').style.backgroundColor = "#8929a3b4"
    document.getElementById('bola2').style.backgroundColor = "transparent"

//-----------------------------------------------------------

    //transições entre imagem e legenda

    document.getElementById('bola1').style.transition = "1s"
    document.getElementById('bola2').style.transition = "1s"

    document.getElementById('img1').style.transition = "1s"

    //troca de legenda
    const legenda = document.getElementById("legenda-foto");
    legenda.textContent = "Premiação 3º geral (Regional)"

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

    //transição entra imagem e legenda

    document.getElementById('bola1').style.transition = "1s"
    document.getElementById('bola2').style.transition = "1s"

    document.getElementById('img1').style.transition = "1s"

    //troca de legenda
    const legenda = document.getElementById("legenda-foto");
    legenda.textContent = "Foto em conjunto da equipe (Regional)"

//-----------------------------------------------------------
}

