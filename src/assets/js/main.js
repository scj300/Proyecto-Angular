
(function () {

    "use strict";
    console.log('DFH');
    // Cuando la página esté cargada
    document.addEventListener("DOMContentLoaded", function () {
        console.log('ready');

        var mail = document.getElementById('mc-embedded-subscribe');

        mail.addEventListener('blur', validarMail);

        function validarMail(){

            // Si encuentra el @ devuelve un valor mayor a -1
            if(this.value.indexOf('@') > -1){
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
            else
            {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = " debe contener '@'";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';
            }

        } // Validar Email

    }) // End "DOMContentLoaded"

});
