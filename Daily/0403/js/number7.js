var check = prompt("아무거나 입력해보세요.");

if (isNaN(check)) {
  document.getElementById("demo").innerHTML = "문자 입니다.";
} else {
  document.getElementById("demo").innerHTML = "숫자 입니다.";
}
