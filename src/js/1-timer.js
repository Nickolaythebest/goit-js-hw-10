import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

  // Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
let timerid = null;

const refs = {
  dateTimePicker: document.getElementById("datetime-picker"),
  startBtn: document.querySelector("[data-start]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   userSelectedDate = selectedDates[0];
   if (userSelectedDate < Date.now()) {
    iziToast.error({
      title: 'Помилка',
      message: "Please choose a date in the future",
      position: 'topRight',
    })
    refs.startBtn.disabled = true;
   } else {
    refs.startBtn.disabled = false;
   }
  },
};

flatpickr(refs.dateTimePicker, options);

refs.startBtn.addEventListener("click", startTimer);

function startTimer(){
  refs.startBtn.disabled = true;
  refs.dateTimePicker.disabled = true;
  timerid = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;
    if (deltaTime <= 0) {
      clearInterval(timerid);
      updateTimerDisplay(0, 0, 0, 0);
      return;
    } else {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
