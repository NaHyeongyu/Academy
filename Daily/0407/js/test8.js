var age = prompt("나이를 입력해주세요.");

if (age >= 20) {
  document.getElementById("demo").innerHTML = "성인입니다.";
} else {
  document.getElementById("demo").innerHTML = "미성년입니다.";
}
