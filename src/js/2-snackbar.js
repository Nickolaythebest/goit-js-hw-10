import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('promiseForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const form = event.target;
    const delay = Number(form.delay.value);
    const state = form.state.value;
  
    createPromise(delay, state)
      .then((delay) => {
        iziToast.success({
          title: '✅ Success',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  });
  
  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }