$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


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