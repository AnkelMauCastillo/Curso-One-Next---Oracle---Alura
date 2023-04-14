function saltarLinea( ) {
    document.write("<br>");
}

function imprimir(params) {
    document.write(params);
    saltarLinea( );    
}

var victorias = parseInt(prompt ("Informe de la cantidad de Victorias: "));
var empates  = parseInt(prompt ("Informe de la cantidad de empates: "));

var puntosTotales = (victorias * 3) + empates;

imprimir ("El total de los puntos del equipo es: " + puntosTotales);

if (puntosTotales > 28) {
    imprimir ("El equipo está mejor que el año pasado");    
} else if (puntosTotales < 28) {
    imprimir ("El equipo está peor que el año pasado");    
}else if (puntosTotales == 28){
    imprimir ("El equipo está igual que el año pasado");
}