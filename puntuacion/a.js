var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var horas = ["", "", "", "", "", "", ""];
var eventos = ["", "", "", "", "", "", ""];
var descs = ["", "", "", "", "", "", ""];

function mostrar() {
  var texto = "";

  for (var i = 0; i < 7; i++) {
    texto = texto + "<tr>";
    texto = texto + "<td>" + dias[i] + "</td>";
    texto = texto + "<td>" + horas[i] + "</td>";
    texto = texto + "<td>" + eventos[i] + "</td>";
    texto = texto + "<td>" + descs[i] + "</td>";
    texto = texto + "</tr>";
  }

  document.getElementById("tabla").innerHTML = texto;
}

function guardar() {
  var dia = document.getElementById("dia").value;

  horas[dia] = document.getElementById("hora").value;
  eventos[dia] = document.getElementById("evento").value;
  descs[dia] = document.getElementById("desc").value;

  mostrar();
}

function ponerDia() {
  var hoy = new Date().getDay();

  if (hoy == 0) {
    hoy = 7;
  }

  document.getElementById("dia").value = hoy - 1;
}

mostrar();
ponerDia();