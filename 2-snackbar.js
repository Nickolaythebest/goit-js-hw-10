import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";document.getElementById("promiseForm").addEventListener("submit",e=>{e.preventDefault();const t=e.target,s=Number(t.delay.value),i=t.state.value;m(s,i).then(o=>{r.success({title:"✅ Success",message:`Fulfilled promise in ${o}ms`,position:"topRight"})}).catch(o=>{r.error({title:"❌ Error",message:`Rejected promise in ${o}ms`,position:"topRight"})})});function m(e,t){return new Promise((s,i)=>{setTimeout(()=>{t==="fulfilled"?s(e):i(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
