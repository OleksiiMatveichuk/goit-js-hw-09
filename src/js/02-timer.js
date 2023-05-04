import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputData = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates[0]) <= Date.parse(new Date())) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    console.log(selectedDates[0]);
    btnStart.disabled = false;

    btnStart.addEventListener('click', clickStart);

    function clickStart() {
      const id = setInterval(() => {
        btnStart.disabled = true;

        const date = new Date(selectedDates[0]);
        const newDate = new Date();
        const result = date - newDate;
        const objResult = convertMs(result);
        const { days, hours, minutes, seconds } = objResult;
        if (date <= newDate) {
          clearInterval(id);
          return;
        }

        spanDays.textContent = String(days);
        spanHours.textContent = String(hours).padStart(2, '0');
        spanMinutes.textContent = String(minutes).padStart(2, '0');
        spanSeconds.textContent = String(seconds).padStart(2, '0');
      }, 1000);
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputData, options);
