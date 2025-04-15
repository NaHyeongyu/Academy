var number = prompt("숫자를 입력해주세요. 구구단을 출력해드립니다.", 0);
result = "";

for (i = 1; i <= 9; i++) {
  result += number + " X " + i + " = " + number * i + "<br>";
}
document.getElementById("number").innerHTML = number + "단";
document.getElementById("result").innerHTML = result;
