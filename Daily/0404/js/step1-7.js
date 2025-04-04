var check = prompt("숫자나 문자를 입력해주세요.");

if (isNaN(check)) {
  document.getElementById("result").innerHTML = "문자입니다.";
} else {
  document.getElementById("result").innerHTML = "숫자입니다.";
}
