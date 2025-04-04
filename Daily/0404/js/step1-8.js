var age = prompt("나이를 입력해주세요.");

if (age >= 20) {
  document.getElementById("result").innerHTML = "성인입니다.";
} else {
  document.getElementById("result").innerHTML = "미성년자입니다.";
}
