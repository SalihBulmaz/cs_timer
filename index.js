const timer = document.getElementById("timer");
const timesEl = document.getElementById("times");
var t = 0.0;
timer.innerText = t.toString();

var timerOn = 0;
INTERVAL = 80;
setInterval(() => {
  if (timerOn) {
    t += INTERVAL / 1000;
    t = parseFloat(t.toFixed(3));
    timer.innerText = t.toString();
  }
}, INTERVAL);

function stopTimer() {
  timerOn = 0;
  if (t != 0) {
    timesEl.innerText += "   " + t.toString();
  }
  t = 0.0;
  scrambleEl.innerText = scramble().join(" ");
}

function startTimer() {
  t = 0.0;
  timerOn = 1;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("resetBtn").addEventListener("click", stopTimer);

// let value = 0;
// window.onkeyup = function (gfg) {
//   if (gfg.keyCode === 32 && value % 2 == 0) {
//     startTimer();
//   }
//   if (gfg.keyCode === 32 && value % 2 == 1) {
//     stopTimer();
//   }
//   value += 1;
// };

var spaceStart = new Date();
var spaceEnd = new Date();
var spacePressed = false;

window.onkeydown = function (gfg) {
  if (gfg.keyCode === 32) {
    if (!spacePressed) {
      spacePressed = true;
      spaceStart.setTime(Date.now());
    }
    if (!timerOn) {
      timer.style.color = "red";
      timer.style.fontSize = "12rem";
    }
  }
};

window.onkeyup = function (gfg) {
  if (gfg.keyCode === 32) {
    if (spacePressed) {
      spacePressed = false;
      spaceEnd.setTime(Date.now());
    }
    timer.style.color = "black";
    timer.style.fontSize = "10rem";
    if (timerOn) {
      stopTimer();
    } else if (!timerOn && spaceEnd.getTime() - spaceStart.getTime() >= 300) {
      startTimer();
    }
  }
};
