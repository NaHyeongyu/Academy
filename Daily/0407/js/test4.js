function carculator(number) {
  var result = "";
  for (i = 1; i <= 9; i++) {
    result += number + " X " + i + " = " + number * i + "<br>";
  }
  return result;
}

document.getElementById("demo").innerHTML = carculator(3);
