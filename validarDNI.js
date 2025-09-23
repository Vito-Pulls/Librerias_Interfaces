  //Selecciono el elemento cuya clase es DNI, y cuando salga de ese campo
    document.querySelector(".dni").onblur = function(){
        let contenido = this.value; //El contenido es el valor del elemento atrapado
        const regex = /^[0-9]{8}[A-Z]$/ //Expresión regular para validar el formato del DNI;
        // si valida el campo se pone verde, si no, rojo
        if (regex.test(contenido)) {
            this.style.borderColor = "green"; // Si el formato es correcto, borde verde
        } else {
            this.style.borderColor = "red"; // Si el formato es incorrecto, borde rojo
        }
    }
