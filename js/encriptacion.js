var codigo = {e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat"}

function encriptar(textoIngresado){

    var encriptado = textoIngresado;
    for(let cod in codigo){
        encriptado = encriptado.replaceAll(cod,codigo[cod])
    }

    return encriptado;
}









/*
function encriptar(textoIngresado){
    var textoEncriptado = "";
    for(var z=0; z<textoIngresado.length;z++){
        textoEncriptado = textoEncriptado + buscarLetra(textoIngresado[z]);
    }
    return textoEncriptado;
}

function buscarLetra(letra){
    for(let cod in codigo){
        if(letra == cod){
            letra = codigo[cod];
            break;
        }
    }
    return letra;

}*/

