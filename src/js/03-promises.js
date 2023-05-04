import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = form.querySelector('[name="delay"]');
const inputStep = form.querySelector('[name="step"]');
const inputAmount = form.querySelector('[name="amount"]');
const btnStart = form.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  }
}

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const delay = inputDelay.value;
  const step = inputStep.value;
  const amount = inputAmount.value;

  createPromise();

  ev.currentTarget.reset();
});
