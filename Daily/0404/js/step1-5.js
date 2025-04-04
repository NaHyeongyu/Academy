var result = "";

for (i = 2; i <= 9; i++) {
  var small = "";
  for (j = 1; j <= 9; j++) {
    small += i + " X " + j + " = " + i * j + "<br>";
  }
  result += small + "<br>";
}

document.getElementById("result").innerHTML = result;
