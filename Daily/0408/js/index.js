var number = [];
var result = 0;

while (1) {
  var askNumber = prompt("입력할 숫자의 갯수를 입력해주세요.");

  if (isNaN(askNumber) == true) {
    alert("문자를 제외한 숫자를 입력해주세요.");
  } else if ((askNumber * 10) % 10 != 0) {
    alert("소숫점을 제외한 정수를 입력해주세요.");
  } else break;
}

var input = function () {
  while (1) {
    var inputNumber = prompt("숫자를 입력해주세요.");
    if (isNaN(inputNumber) == true) {
      alert("문자를 제외한 숫자를 입력해주세요.");
    } else if ((inputNumber * 10) % 10 != 0) {
      alert("소숫점을 제외한 정수를 입력해주세요.");
    } else {
      inputNumber = Number(inputNumber);
      break;
    }
  }
  number.push(inputNumber);
};
var i = 0;
while (i < askNumber) {
  input();
  i++;
}

var calculator = function () {
  for (var j = 0; j < number.length; j++) {
    if (number[j] % 2 === 0) {
      result += number[j];
    }
  }
  return result;
};

document.getElementById("demo").innerHTML = calculator();
