var food = ["steak", "pasta", "pizza", "rice"];

function random() {
  var index = Math.floor(Math.random() * food.length); // 랜덤 인덱스 저장
  var select = food[index]; // 해당 인덱스로 값 선택
  document.getElementById("food").innerHTML = "오늘은 " + select + " 어때요?";
}
