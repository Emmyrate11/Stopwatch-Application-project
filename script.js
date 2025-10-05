let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Format time to HH:MM:SS.MS
function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);
  const ms = time % 1000;

  return (
    `${hrs.toString().padStart(2, "0")}:` +
    `${mins.toString().padStart(2, "0")}:` +
    `${secs.toString().padStart(2, "0")}.` +
    `${ms.toString().padStart(3, "0")}`
  );
}

function startTimer() {
  if (timerInterval) return; // to prevent multiple intervals

  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 10); // update every 10ms
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
}

// Attach event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
