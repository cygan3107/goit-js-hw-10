import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r,n as i}from"./assets/vendor-c475855b.js";r.show({title:"Hey",message:"What would you like to add?"});const m=document.querySelector(".form"),s={delay:document.querySelector('input[name="delay"]'),state:document.querySelector('input[name="state"]')};m.addEventListener("submit",t=>{t.preventDefault();for(let e=0;e<s.amount.value;e+=1)u(e+1,Number(s.delay.value)+e*Number(s.state.value)).then(o=>{i.Notify.success(o)}).catch(o=>{i.Notify.failure(o)})});function u(t){return new Promise((e,o)=>{setTimeout(()=>{Math.random()>.3?e(`✅ Fulfilled promise in ${t}ms`):o(`❌ Rejected promise in ${t}ms`)},t)})}
//# sourceMappingURL=commonHelpers2.js.map
