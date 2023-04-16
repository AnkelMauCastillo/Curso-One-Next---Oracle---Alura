//var secreto = Math.round(Math.random()*10);
function aleatorio() {
    return Math.round(Math.random()*10);    
}

function sortearNumeros(cantidad) {
    var arreglo = [];
   var contador = 1;

   while (contador <= cantidad) {
    var numeroAleatorio =  aleatorio();
    var encontrado = false;
    if (numeroAleatorio != 0) {
        for (let index = 0; index < arreglo.length; index++) {
            if (numeroAleatorio == arreglo[index]) {
                encontrado = true; 
                break;           
            }        
            
        }
    
        if (!encontrado) {
            arreglo.push(numeroAleatorio);
            contador++;        
        }
    }

   }
    return arreglo;    
}

var n = parseInt(prompt ("Ingresa  cuantos valores secretos vas a guardar"));
var secretos = sortearNumeros(n);


var input = document.querySelector('input');
input.focus();

function verificar() {
    var encontrado = false;
    for (let index = 0; index < secretos.length; index++) {
        if (parseInt(input.value) == secretos[index]) {
            alert('Usted acertó');
            encontrado = true;
            break;
        }        
    }

    if (!encontrado){
        alert('Usted erro');
    }

    input.value = '';
    input.focus();
}

var button = document.querySelector('button');
button.onclick =verificar;

