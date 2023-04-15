function saltarLinea( ) {
    document.write("<br>");    
}

function imprimir(params) {
    document.write("<h4>"+ params + "</h4>");
    //saltarLinea( );    
}

var anioMundial = 1930;
var limite = parseInt (prompt ("Ingrese el año limite para calcular:"));

//alert("Hubo mundial de la fifa en el año " + anioMundial);

while (anioMundial <= limite) {
    
    imprimir("Hubo mundial de la fifa en el año " + anioMundial);
    anioMundial += 4;

}

imprimir("Fin");