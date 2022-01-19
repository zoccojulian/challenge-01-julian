var botonEncriptar = capturarHtml("#btn-encriptar");
var botonDesencriptar = capturarHtml("#btn-desencriptar");
var botonCopy = capturarHtml("#btn-copy");
var mensajeBox = capturarHtml("#msg");
var tituloResultado = capturarHtml("#titulo-resultado");
var error = capturarHtml("#error");

//boton encriptar. Valida entrada de datos.
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var textoIngresado = capturarTexto();
    
    if (validacionTextoIngresado(textoIngresado)){
        var textoEncriptado = encriptar(textoIngresado);
        mensajeBox.value = textoEncriptado;
        error.classList.add("invisible");
        tituloResultado.textContent = "Mensaje encriptado:";
        borrarTextoIngresado();
    }else{
        mensajeBox.value = "";
        error.classList.remove("invisible");
    }
});

//boton desencriptar. Valida entrada de datos.
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var textoIngresado = capturarTexto();

    if (validacionTextoIngresado(textoIngresado)){
        var textoDesencriptado = desencriptar(textoIngresado);
        mensajeBox.value = textoDesencriptado;
        error.classList.add("invisible");
        tituloResultado.textContent = "Mensaje desencriptado:";
        borrarTextoIngresado();
    }else{
        mensajeBox.value = "";
        error.classList.remove("invisible");
        
    }

});


botonCopy.addEventListener("click",function(event){
    event.preventDefault();
    mensajeBox.select();
    document.execCommand("copy");
    
});

//captura el datos
function capturarTexto(){
    let texto = document.querySelector("#texto-ingresado").value;
    return texto;
}

//capturar objeto de html document.querysSelector
function capturarHtml(nombre){
    let objeto = document.querySelector(nombre);
    return objeto;
}

function borrarTextoIngresado(){
    document.querySelector("#texto-ingresado").value = "";
}
