function saltarLinea( ) {
    document.write("<br>");    
}

function imprimir(params) {
    document.write("<h4>"+ params + "</h4>");
    //saltarLinea( );    
}
function sorteo(n) {
    return Math.round(Math.random()*n);    
}


var intentos = 3;
var contador = 1;
var n = parseInt(prompt("Dame un numero para Sortear: "));
var numeroPensado = sorteo(n);

while (contador <= intentos) {
    
    if (contador == 1) {
        var numeroLanzado = parseInt (prompt("Ingrese el numero entre 0-" + n));
        contador++;        
    }else if (numeroLanzado > numeroPensado) {
        numeroLanzado = parseInt(prompt(numeroLanzado + " es numero Incorrecto, El numero correcto es todavia menor, Intentelo de nuevo"));
        contador++;
    } else if (numeroLanzado < numeroPensado) {
        numeroLanzado = parseInt(prompt(numeroLanzado + " es numero Incorrecto, El numero correcto es todavia mayor, Intentelo de nuevo"));
        contador++;

    }
    if (numeroLanzado == numeroPensado) {
        imprimir("Felicidades es el Numero Correcto: " + numeroPensado);
        break;

    } else {
        
        if (contador == 3) {
            imprimir("Haz perdido tus intentos, el Numero correcto es: " + numeroPensado);
            
        }
        
    }
    
    

}

