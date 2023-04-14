function saltarLinea( ) {
    document.write("<br>");
}

function imprimir(params) {
    document.write(params);
    saltarLinea( );    
}

function imc(peso, altura, nombre) {
    var imc = peso/ (Math.pow(altura, 2));
    return "El imc Calculado de: "+ nombre +" es: " + imc;
}

var pesoAngel = 93;
var alturaAngel = 1.72;
imc(pesoAngel, alturaAngel, "Angel");

//imprimir (pesoAngel,alturaAngel, "Angel");

imcAngel = imc(93, 1.72, "Angel");
imcEdy = imc(85, 1.70, "Edy");
imprimir(imcAngel);
imprimir(imcEdy);



