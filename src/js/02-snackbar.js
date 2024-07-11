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
  for (let i = 0; i < formsItemsRef.delay.value; i += 1) {
    createPromise(i, Number(formsItemsRef.delay.value))
      .then(delay => {
        iziToast.success({message:`✅ Fulfilled promise in ${delay}ms`});
      })
      .catch(delay => {
        iziToast.warning({message:`❌ Rejected promise in ${delay}ms`});
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