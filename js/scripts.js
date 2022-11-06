$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// VALIDACION DE LICENCIAS 
function ValidarLicencia() {
  var licencia = document.forms["precios"]["licencia"].value;
  var cantidad = document.forms["precios"]["cantidad"].value;

  var total;
  if (cantidad < 0) {
      alert("Se ingresaron valores negativos y se transformaran en positivos");
      cantidad = cantidad * (-1);
  }
  switch (licencia) {
      case "1":
          total = 145000;
          break;
      case "2":
          total = 205000;
          break;
      case "3":
          total = 340000;
          break;
  }
  document.getElementById("total").innerHTML = (total * cantidad);
}

function ValidarPago() {
  var tarjeta = document.forms["precios"]["tarjeta"].value;
  switch (tarjeta) {
      case "1":
          document.getElementById("credito").style.display = "none";
          document.getElementById("creditocuo").style.display = "none";
          break;
      case "2":
          document.getElementById("credito").style.display = "inline";
          document.getElementById("creditocuo").style.display = "inline";
          break;
  }
}

function ValidarCuotas() {
  var cuotas = document.forms["precios"]["cuotas"].value;
  total = document.getElementById("total").innerHTML;
  document.getElementById("cuotas").innerHTML = (total / cuotas);
}

// VALIDACION FORMULARIO
const form = document.getElementById('form');
const nombre = Document.getElementById("nombre");
const correo = Document.getElementById("email");
const telefono = Document.getElementById("telefono");
const asunto = Document.getElementById("Asunto");
const mensaje = Document.getElementById("mensaje");
//  var error = Document.getElementById("error");
 
form.addEventListener('sumit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nombreValue = usuario.nodeValue.trim();
    const correoValue = correo.nodeValue.trim();
    const telefonoValue = telefono.nodeValue.trim();
    const asuntoValue = asunto.nodeValue.trim();
    const mensajeValue = mensaje.nodeValue.trim();

    if(nombre.value === ''){
       setErrorFor(nombre, 'Ingresa tu nombre completo');
    }else{
        setSuccessFor(nombre);
    }

    if(correo.value ===  ''){
        mensajeError.push('Ingresa tu nombre correo');
    }

    if(telefono.value ===  ''){
        mensajeError.push('Ingresa tu nombre telefono');
    }

    if(asunto.value === ''){
        mensajeError.push('Digita el asunto');
    }

    if(mensaje.value === ''){
        mensajeError.push('Ingresa tu nombre correo');
    }

        error.innerHtml = mensajeError.join(',');

    return false; 
}

function setError(input, message){
    const formControl = input.parenElement;
    const small = formControl.querySelector('small')
    formControl.className= 'form-control error';
    small.innerHTML = message;
}

function setSuccess(input){
    const formControl = input.parenElement; 
    formControl.className= 'form-control success';
}

function iscorreo(correo) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}
