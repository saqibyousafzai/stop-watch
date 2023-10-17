var [milliseconds, seconds, minutes] = [0, 0, 0];
var timeRef = document.querySelector(".timer-display");
var int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  var m = minutes < 10 ? "0" + minutes : minutes;
  var s = seconds < 10 ? "0" + seconds : seconds;
  var ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timeRef.innerHTML = `${m} : ${s} : ${ms}`;
}