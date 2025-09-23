// Selecciono el elemento cuya clase es DNI, y cuando salga de ese campo
document.querySelector(".numerodecimalcoma").onblur = function () {
  let contenido = this.value; // El contenido es el valor del elemento atrapado
  const regexp = /^[0-9]+(,[0-9]{1,2})?$/;
  if (regexp.test(contenido)) {
    this.style.border = "1px solid green";
  } else {
    this.style.border = "1px solid red";
  }
};
