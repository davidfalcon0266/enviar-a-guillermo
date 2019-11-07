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

function validarInputs(e) {

    if (this.value == "") {
        mensaje.style.display = "block";

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
        mensaje.innerHTML = "";

        mensaje.style.display = "none";
        this.style.border = "none";
        // document.getElementById('formulario').reset();

    }
    e.preventDefault();

}

document.getElementById('formulario').addEventListener('submit', function(e) {
        if (ciudad.value && fecha.value && fecha2.value && ciudad2.value && economy.value && niño.value && viaja.value && codigo.value !== "") {
            mensaje.style.display = "block";

            mensaje.innerHTML = "datos enviados de manera exitosa";

            mensaje.style.width = "70%";
            mensaje.style.textAlign = "center";
            mensaje.style.margin = "0 auto";
            mensaje.style.padding = "10px";
            mensaje.style.fontSize = "1.3em";
            mensaje.style.border = "2px solid green";
            mensaje.style.backgroundColor = "green";


            setTimeout(ocultar, 3000);

            document.getElementById('formulario').reset();
        } else {
            mensaje.style.display = "block";
            mensaje.innerHTML = "debes completar los campos";
            mensaje.style.width = "70%";
            mensaje.style.textAlign = "center";
            mensaje.style.margin = "0 auto";
            mensaje.style.padding = "10px";
            mensaje.style.fontSize = "1.3em";
            mensaje.style.border = "2px solid red";

        }
        e.preventDefault();


    }

);

function ocultar() {
    mensaje.style.display = "none";
};