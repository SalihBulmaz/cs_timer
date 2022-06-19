const seconds = document.querySelector("#seconds");
var _seconds = 0;
const minutes = document.querySelector("#minutes");
var _minutes = 0;
const hours = document.querySelector("#hours");
var _hours = 0;
const now = new Date();
_seconds = parseInt(now.getSeconds());
_minutes = parseInt(now.getMinutes());
_hours = parseInt(now.getHours());
seconds.innerText = _seconds.toString();
minutes.innerText = _minutes.toString();
hours.innerText = _hours.toString();
function clock() {
  // _seconds += 1;
  // if(_seconds % 60 == 0) {
  //     _seconds = 0;
  //     _minutes += 1;
  // }
  // if(_minutes % 60 == 0) {
  //     _minutes = 0;
  //     _hours += 1;
  // }
  // if(_hours % 24 == 0) {
  //     _hours = 0;
  // }
  now.setTime(Date.now());
  _seconds = now.getSeconds();
  _minutes = now.getMinutes();
  _hours = now.getHours();
  if (_seconds < 10) {
    _seconds = "0" + _seconds.toString();
  }
  if (_minutes < 10) {
    _minutes = "0" + _minutes.toString();
  }
  if (_hours < 10) {
    _hours = "0" + _hours.toString();
  }

  seconds.innerText = _seconds.toString();
  minutes.innerText = _minutes.toString();
  hours.innerText = _hours.toString();
}
setInterval(clock, 1000);
