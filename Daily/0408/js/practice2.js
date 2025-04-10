var askNumber = function () {
  while (true) {
    parseInt(prompt("받으실 숫자를 입력해주세요."));
    if (isNaN(start) == true) {
      alert("문자를 제외한 숫자를 입력해주세요.");
      location.reload();
    }
    if ((start * 10) % 10 != 0) {
      alert("소숫점을 제외한 정수를 입력해주세요.");
    }
  }
};

var start = askNumber();
