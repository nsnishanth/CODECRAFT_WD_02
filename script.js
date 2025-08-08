let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let running = false;
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}
function startStopwatch() {
  if (!running) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    running = true;
    startStopBtn.innerText = "Pause";
  } else {
    clearInterval(interval);
    running = false;
    startStopBtn.innerText = "Start";
  }
}
function resetStopwatch() {
  clearInterval(interval);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  running = false;
  startStopBtn.innerText = "Start";
}

function recordLap() {
  if (running) {
    const lapTime = display.innerText;
    const lapItem = document.createElement("li");
    lapItem.textContent = "Lap - " + lapTime;
    document.getElementById("laps").appendChild(lapItem);
  }
}

const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");

startStopBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);

updateDisplay(); 