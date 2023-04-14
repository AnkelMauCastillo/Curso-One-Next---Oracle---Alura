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

var peso = prompt("Dame tu peso: ");
var altura = prompt ("Dame tu altura: ");
var nombre = prompt ("Nombre: ");
//imc(pesoAngel, alturaAngel, "Angel");

//imprimir (pesoAngel,alturaAngel, "Angel");

imcAngel = imc(peso, altura, nombre);
imcEdy = imc(85, 1.70, "Edy");
imprimir(imcAngel);
imprimir(imcEdy);



