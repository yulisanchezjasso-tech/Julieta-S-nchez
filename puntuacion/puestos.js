// filas = puestos, columnas = niveles
var sueldos = [
  [120, 180, 280],
  [120, 210, 340],
  [240, 520, 890]
];

function calcular() {
  var puesto = document.getElementById("puesto").value;
  var nivel = document.getElementById("nivel").value;
  var horas = document.getElementById("horas").value;

  var total = sueldos[puesto][nivel] * horas;

  document.getElementById("total").innerHTML = total;
}