var score = [12, 26, 76, 26, 97, 46];

max = 0;
min = 100;
avg = 0;
sum = 0;

for (i = 0; i < score.length; i++) {
  if (min >= score[i]) {
    min = score[i];
  }
}
document.getElementById("demo1").innerHTML = min;

for (i = 0; i < score.length; i++) {
  if (max <= score[i]) {
    max = score[i];
  }
}
document.getElementById("demo2").innerHTML = max;

for (i = 0; i < score.length; i++) {
  sum += score[i];
}
avg = sum / score.length;
document.getElementById("demo3").innerHTML = Math.round(avg);
