function dibujar() {
  var texto = "";

  for (var i = 1; i <= 5; i++) {
    if (i % 2 == 1) {
      texto = texto + "XXXX<br>";
    } else {
      texto = texto + "X<br>";
    }
  }

  document.getElementById("resultado").innerHTML = texto;
}