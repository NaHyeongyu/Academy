var number = prompt("숫자를 입력해주세요", 0);
var result = "";
for (i = 1; i <= 9; i++) {
  result += number + " X " + i + " = " + number * i + "<br>";
}
document.getElementById("demo").innerHTML = result;
