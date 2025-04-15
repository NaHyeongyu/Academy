var test_score1 = [92, 45, 21, 67, 23];
var max = 0;
var min = 100;
var sum = 0;
var avg = 0;

for (var i = 0; i < test_score1.length; i++) {
  if (max <= test_score1[i]) {
    max = test_score1[i];
  }
}
document.getElementById("max").innerHTML = "max = " + max;

for (var i = 0; i < test_score1.length; i++) {
  if (min >= test_score1[i]) {
    min = test_score1[i];
  }
}
document.getElementById("min").innerHTML = "min = " + min;

for (var i = 0; i < test_score1.length; i++) {
  sum += test_score1[i];
}
avg = sum / test_score1.length;
document.getElementById("avg").innerHTML = "avg = " + avg;
document.getElementById("sum").innerHTML = "sum = " + sum;
