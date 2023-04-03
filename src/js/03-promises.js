import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onNotifyPromises);

function onNotifyPromises(event) {
  event.preventDefault();

  const {elements: {amount, delay, step}} = event.currentTarget;
  const amountPromises = +amount.value;
  let delayTimeout = +delay.value;
  const stepDelay = +step.value;

  for (let position = 1; position <= amountPromises; position++) {
    createPromise(position, delayTimeout).then(result => {
      Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    }).catch(err => {
      Notify.failure(`❌ Rejected promise ${err.position} in ${err.delay}ms`);
    });

    delayTimeout += stepDelay;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position,delay});
      } else {
        // Reject
        reject({position,delay});
      }
    }, delay);
  })
}
