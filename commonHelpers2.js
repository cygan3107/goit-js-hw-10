import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";r.show({title:"Hey",message:"What would you like to add?"});const i=document.querySelector(".form"),s={delay:document.querySelector('input[name="delay"]'),state:document.querySelector('input[name="state"]')};i.addEventListener("submit",t=>{t.preventDefault();for(let e=0;e<s.amount.value;e+=1)m(e+1,Number(s.delay.value)+e*Number(s.state.value)).then(o=>{Notify.success(o)}).catch(o=>{Notify.failure(o)})});function m(t){return new Promise((e,o)=>{setTimeout(()=>{Math.random()>.3?e(`✅ Fulfilled promise in ${t}ms`):o(`❌ Rejected promise in ${t}ms`)},t)})}
//# sourceMappingURL=commonHelpers2.js.map