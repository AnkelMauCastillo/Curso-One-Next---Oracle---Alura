function saltarLinea( ) {
    document.write("<br>");
}

function imprimir(params) {
    document.write(params);
    saltarLinea( );    
}

var multiplicador = 0;
imprimir ("while");
while (multiplicador <= 10) {
    imprimir (2 * multiplicador); 
    multiplicador ++;   
}

imprimir ("for");
for (let index = 0; index <= 10; index++) {
    imprimir (2 * index);    
}