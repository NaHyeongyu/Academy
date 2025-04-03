var age = prompt("나이를 입력해주세요", 0);

if (age <= 20) {
  document.getElementById("demo").innerHTML = "미성년입니다";
} else {
  document.getElementById("demo").innerHTML = "성년입니다.";
}
