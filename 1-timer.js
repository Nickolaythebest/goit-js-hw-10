import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as y}from"./assets/vendor-BbbuE1sJ.js";let d=null,u=null;const e={dateTimePicker:document.getElementById("datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<Date.now()?(y.error({title:"Помилка",message:"Please choose a date in the future",position:"topRight"}),e.startBtn.disabled=!0):e.startBtn.disabled=!1}};f(e.dateTimePicker,p);e.startBtn.addEventListener("click",T);function T(){e.startBtn.disabled=!0,e.dateTimePicker.disabled=!0,u=setInterval(()=>{const t=Date.now(),n=d-t;if(n<=0){clearInterval(u),c(0,0,0,0);return}else{const{days:o,hours:r,minutes:i,seconds:a}=S(n);c(o,r,i,a)}},1e3)}function S(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:m,seconds:h}}function c(t,n,o,r){e.days.textContent=s(t),e.hours.textContent=s(n),e.minutes.textContent=s(o),e.seconds.textContent=s(r)}function s(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
