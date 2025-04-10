let number = parseInt(prompt("2 ~ 9 까지의 숫자를 입력해주세요."));

while (isNaN(number) || number < 2 || number > 9) {
  alert("잘못된 입력입니다. 다시 입력하세요.");
  number = parseInt(prompt("2 ~ 9 까지의 숫자를 입력해주세요."));
}

let result = "";
for (let i = 1; i <= 9; i++) {
  result += number + " X " + i + " = " + number * i + "<br>";
}

document.getElementById("demo").innerHTML = result;
