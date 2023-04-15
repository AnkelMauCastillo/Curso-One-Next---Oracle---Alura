function saltarLinea( ) {
    document.write("<br>");    
}

function imprimir(params) {
    document.write(params );
    saltarLinea( );    
}

num = 1;

while (num <= 100) {
    if (num % 2 == 0) {
        imprimir (num);        
    }
    num++;    
}
imprimir ("fin");