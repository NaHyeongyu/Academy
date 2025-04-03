var test_score1 = [92, 45, 21, 67, 23];
var max = 0;
var min = 100;
var sum = 0;
var avg = 0;
for (i = 0; i <= test_score1.length; i++) {
  if (max <= test_score1[1]) {
    max = test_score1[i];
  }
  document.getElementById("demo1").innerHTML = max;
}

for (i = 0; i <= test_score1.length; i++) {
  if (min >= test_score1[i]) {
    min = test_score1[i];
  }
  document.getElementById("demo2").innerHTML = min;
}

for (i = 0; i <= test_score1.length; i++) {
  sum += test_score1[i];
}
avg = sum / test_score1.length;
document.getElementById("demo3").innerHTML = avg;
