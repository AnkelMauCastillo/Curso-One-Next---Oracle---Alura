var secreto = Math.round(Math.random()*10);
var input = document.querySelector('input');
input.focus();

function verificar() {
    if (parseInt(input.value) == secreto) {
        alert('Usted acertó');
    } else {
        alert('Usted erro');
    }

    input.value = '';
    input.focus();
}

var button = document.querySelector('button');
button.onclick =verificar;

