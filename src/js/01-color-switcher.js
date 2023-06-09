const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;
let id = 0;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clickStart = ev => {
  id = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
};

const clickStop = ev => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(id);
};

btnStart.addEventListener('click', clickStart);
btnStop.addEventListener('click', clickStop);
