var result = "";
var number = 9;
var i = 1;
while (i <= 9) {
  result += number + " X " + i + " = " + number * i + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = result;
