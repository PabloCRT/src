/* Parte do slide (INÍCIO) */
let numeracao = 1;

document.getElementById('radio1').checked = true;

setInterval( function(){
    proximaImagem();
}, 2000)



function proximaImagem(){
    numeracao++
    
    if(numeracao > 3){
        numeracao = 1;
    }

    document.getElementById('radio'+numeracao).checked = true;

}
/* Parte do slide (FIM) */ 
