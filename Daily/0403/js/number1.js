var result = "";

var number = 7;
for (i = 1; i <= 9; i++) {
  result += number + " X " + i + " = " + number * i + "<br>";
}

document.getElementById("demo").innerHTML = result;
