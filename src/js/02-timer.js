import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
    console.log(selectedDates[0]);
    const date = new Date(selectedDates[0]);
    const newDate = new Date();
    const result = date - newDate;
    const objResult = convertMs(result);
    console.log('result :>> ', objResult);
    setInterval(() => {
      spanDays.textContent = objResult.days;
      spanHours.textContent = objResult.hours;
      spanMinutes.textContent = objResult.minutes;
      spanSeconds.textContent = objResult.seconds;
    }, 100);
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

// console.log('inputData :>> ', inputData);
// console.log('btnStart :>> ', btnStart);
// console.log('spanDays :>> ', spanDays);
// console.log('spanHours :>> ', spanHours);
// console.log('spanMinutes :>> ', spanMinutes);
// console.log('spanSeconds :>> ', spanSeconds);

flatpickr(inputData, options);
