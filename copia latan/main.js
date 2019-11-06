// document.getElementById('formulario').addEventListener('submit', validarInputs);
var ciudad = document.getElementById('ciudad');
var fecha = document.getElementById('fecha');
var fecha2 = document.getElementById('fecha2');
var ciudad2 = document.getElementById('ciudad2');
var economy = document.getElementById('economy');
var niño = document.getElementById('niño');
var codigo = document.getElementById('codigo');
var viaja = document.getElementById('viaja');
var mensaje = document.getElementById('mensaje');


ciudad.addEventListener('blur', validarInputs);
fecha2.addEventListener('blur', validarInputs);





fecha.addEventListener('blur', validarInputs);
ciudad2.addEventListener('blur', validarInputs);
economy.addEventListener('blur', validarInputs);
viaja.addEventListener('blur', validarInputs);
codigo.addEventListener('blur', validarInputs);
niño.addEventListener('blur', validarInputs);

function validarInputs() {

    if (this.value == "") {
        mensaje.style.border = "block";

        mensaje.innerHTML = "debes completar los campos";

        mensaje.style.width = "70%";
        mensaje.style.textAlign = "center";
        mensaje.style.margin = "0 auto";
        mensaje.style.padding = "10px";
        mensaje.style.fontSize = "1.3em";
        mensaje.style.border = "2px solid red";
        this.style.border = "3px solid red";
        // this.focus();
    } else {
        mensaje.style.display = "none";
        this.style.border = "none";
        // document.getElementById('formulario').reset();

    }
    // e.preventDefault();

}