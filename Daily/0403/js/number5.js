var result = "";

for (i = 2; i <= 9; i++) {
  var dan = "";
  for (j = 1; j <= 9; j++) {
    dan += i + " X " + j + " = " + i * j + "<br>";
  }
  result += dan + "<br>";
}
document.getElementById("demo").innerHTML = result;
