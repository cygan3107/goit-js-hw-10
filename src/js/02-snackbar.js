// Opisany w dokumentacji
import iziToast from 'izitoast';
// Kolejny import stylów
import 'izitoast/dist/css/iziToast.min.css';

const formRef = document.querySelector('.form');
const formsItemsRef = {
  delay: document.querySelector('input[name="delay"]'),
  state: document.querySelector('input[name="state"]'),
};

formRef.addEventListener('submit', event => {
  event.preventDefault();
  for (let i = 0; i < formsItemsRef.amount.value; i += 1) {
    createPromise(
      i + 1,
      Number(formsItemsRef.delay.value) + i * Number(formsItemsRef.state.value)
    )
      .then(value => {
        Notify.success(value);
      })
      .catch(err => {
        Notify.failure(err);
      });
  }
});

function createPromise(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
