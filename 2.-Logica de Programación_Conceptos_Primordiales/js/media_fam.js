function saltarLinea( ) {
    document.write("<br>");    
}

function imprimir(params) {
    document.write("<h4>"+ params + "</h4>");
    //saltarLinea( );    
}

var numeroMiembros = parseInt (prompt ("Ingrese la Cantidad de Miembros de su familia"));
var contador = 1;
var totalEdaddes = 0;
while (contador <= numeroMiembros) {
    edad = parseInt (prompt ("Ingrese la edad del familiar"));
    totalEdaddes += edad;
    contador++;
    
}
var mediaEdades = totalEdaddes / contador;
imprimir ("La media de las edades es: " + mediaEdades);

imprimir ("fin");
