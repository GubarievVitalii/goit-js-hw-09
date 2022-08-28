let intervalId = null;
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function blockBtnStart(status) {
  btnStart.disabled = status;
}

function blockBtnStop(status) {
  btnStop.disabled = status;
}

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startChangeColor() {
  blockBtnStart(true);
  blockBtnStop(false);
  intervalId = setInterval(() => {
    changeColor();
  }, 1000);
}

function stopChangeColor() {
  blockBtnStart(false);
  blockBtnStop(true);
  clearInterval(intervalId);
}
