var number = prompt("아무거나 입력해보세요");

if (isNaN(number)) {
  document.getElementById("demo").innerHTML = "문자입니다";
} else {
  document.getElementById("demo").innerHTML = "숫자입니다.";
}
