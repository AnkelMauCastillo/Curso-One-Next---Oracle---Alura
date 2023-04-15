function saltarLinea( ) {
    document.write("<br>");
}

function imprimir(params) {
    document.write(params);
    saltarLinea( );    
}




function imcFun(peso, altura) {
    
    return peso/ (Math.pow(altura, 2));
}

function tipoObesidad(imc, nom) {
    if (imc < 18.5) {
        return nom + " Su imc es:"+ imc + ", Usted tiene Insuficiencia ponderal";
    } else if (imc >= 18.5 && imc < 25) {
        return nom + " Su imc es:"+ imc + ", Usted tiene un Intervalo Normal";
    } else if (imc >= 25 && imc < 30) {
        return nom + " Su imc es:"+ imc + ", Usted tiene Sobrepeso (Preobesidad)";
    } else if (imc >= 30) {
        if (imc >= 30 && imc < 35) {
            return nom + " Su imc es:"+ imc + ", Usted tiene Obesidad de Clase I";
        } else if (imc >= 35 && imc < 40) {
            return nom + " Su imc es:"+ imc + ", Usted tiene Obesidad de Clase II";
        } else if (imc >= 40) {
            return nom + "  Su imc es:"+ imc + ", Usted tiene Obesidad  de Clase III";
        }
    }
}


var nombre = prompt ("Nombre: ");
var peso = parseFloat(prompt(nombre + ", Dame tu peso: "))
var altura = parseFloat (prompt (nombre + ", Dame tu altura: "));

imcPersona = imcFun(peso, altura);
var prueba = tipoObesidad((imcPersona), nombre);
imprimir (prueba);


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


