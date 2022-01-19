var alfabeto =" abcdefghijklmnopqrstuvwxyz";

function validacionTextoIngresado(texto){
    var textoCorrecto = false;
    for(i=0;i<texto.length;i++){
        textoCorrecto = alfabeto.includes(texto[i]);
        if(!textoCorrecto){
            break;
        }
    }
    return textoCorrecto;
}



