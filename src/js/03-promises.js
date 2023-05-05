import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputDelay = form.querySelector('[name="delay"]');
const inputStep = form.querySelector('[name="step"]');
const inputAmount = form.querySelector('[name="amount"]');
// const btnStart = form.querySelector('button');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const delay = inputDelay.value;
  const step = inputStep.value;
  const amount = inputAmount.value;
  let ms = Number(delay);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, ms)
      .then(obj => {
        const { position, delay } = obj;
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(obj => {
        const { position, delay } = obj;
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    ms += Number(step);
  }

  ev.currentTarget.reset();
});
