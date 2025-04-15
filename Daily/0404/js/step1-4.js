var number = prompt("숫자를 입력하세요. 구구단을 출력해드립니다.");
var result = "";

function carculater(number) {
  for (i = 1; i <= 9; i++) {
    result += number + " x " + i + " = " + number * i + "<br>";
  }
}

carculater(number);
document.getElementById("result").innerHTML = result;
document.getElementById("number").innerHTML = number;
