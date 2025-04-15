var check = prompt("숫자나 문자를 입력해주세요.");

if (isNaN(check)) {
  document.getElementById("demo").innerHTML = "문자 입니다.";
} else {
  document.getElementById("demo").innerHTML = "숫지입니다.";
}
