function saltarLinea( ) {
    document.write("<br>");    
}

function imprimir(params) {
    document.write("<h4>"+ params + "</h4>");
    //saltarLinea( );    
}
var estrella = '*';
for (let i = 1; i <=3 ; i++) {    
   for (let j = 1; j <= 10; j++) {
        document.write( estrella );        
    
   }
   saltarLinea();
}

imprimir ("fin");