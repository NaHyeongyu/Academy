calculater(3);
function calculater(x) {
  var result = " ";
  for (i = 1; i <= 9; i++) {
    result += x + " X " + i + " = " + x * i + "<br>";
  }
  document.getElementById("demo").innerHTML = result;
}
