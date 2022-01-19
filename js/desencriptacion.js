var codigoInverso={};

for(let cod in codigo){
    codigoInverso[codigo[cod]] = cod;
}

function desencriptar(textoIngresado){
    var desencriptado = textoIngresado;
    for(let cod in codigoInverso){
        desencriptado = desencriptado.replaceAll(cod,codigoInverso[cod])
    }
    return desencriptado;
}
