import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,n as f}from"./assets/vendor-c475855b.js";const a=document.querySelector("button[data-start]"),y=document.querySelector("#datetime-picker"),n={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};a.disabled=!0;let r=Date.now(),s=0,u=0;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){Date.parse(t[0])<r?(f.Notify.failure("Please choose a date in the future"),a.disabled=!0):(u=Date.parse(t[0]),a.disabled=!1)}};m(y,h);a.addEventListener("click",p);function p(){const t=setInterval(()=>{if(r=Date.now(),s=u-r,s>0){const e=S(s);n.days.textContent=e.days,n.hours.textContent=e.hours,n.minutes.textContent=e.minutes,n.seconds.textContent=e.seconds}else clearInterval(t)},1e3)}function S(t){const c=o(Math.floor(t/864e5)),d=o(Math.floor(t%864e5/36e5)),i=o(Math.floor(t%864e5%36e5/6e4)),l=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:c,hours:d,minutes:i,seconds:l}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
