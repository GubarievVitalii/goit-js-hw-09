import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const selector = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const dataDaysEl = document.querySelector('[data-days]');
const dataHoursEl = document.querySelector('[data-hours]');
const dataMinutesEl = document.querySelector('[data-minutes]');
const dataSeconndsEl = document.querySelector('[data-seconds]');

let dateChosen = null;
let intervalId = null;

flatpickr(selector, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateToday = Date.now();
    dateChosen = selectedDates[0];
    if (dateChosen <= dateToday) {
      blockBtnStart(true);
      createAlert();
      return;
    }
    blockBtnStart(false);
  },
});

function createAlert() {
  return Notiflix.Notify.failure('Please choose a date in the future', {
    width: '300px',
    borderRadius: '10px',
    fontSize: '20px',
    position: 'center-center',
  });
}

btnStart.addEventListener('click', onBtnStartClick);

function blockBtnStart(status) {
  btnStart.disabled = status;
}

function blockInput(status) {
  inputEl.disabled = status;
}

function onBtnStartClick() {
  blockBtnStart(true);
  blockInput(true);
  updateTimer();

  intervalId = setInterval(() => {
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const timerEl = dateChosen - Date.now();

  if (timerEl <= 0) {
    clearInterval(intervalId);
    inputEl.disabled = false;
    return;
  }
  convertMs(timerEl);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  dataDaysEl.textContent = days.toString().padStart('2', '0');
  const hours = Math.floor((ms % day) / hour);
  dataHoursEl.textContent = hours.toString().padStart('2', '0');
  const minutes = Math.floor(((ms % day) % hour) / minute);
  dataMinutesEl.textContent = minutes.toString().padStart('2', '0');
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  dataSeconndsEl.textContent = seconds.toString().padStart('2', '0');
  return { days, hours, minutes, seconds };
}
