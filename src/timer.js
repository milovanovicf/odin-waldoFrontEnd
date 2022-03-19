let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

const timer = () => {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  document.querySelector(".levles__timer").innerText =
    displayMinutes + ":" + displaySeconds;
};
module.exports = timer;
