function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=l.querySelector('[name="delay"]'),a=l.querySelector('[name="step"]'),s=l.querySelector('[name="amount"]');function d(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();const o=u.value,n=a.value,r=s.value;let l=Number(o);for(let t=0;t<r;t+=1)d(t+1,l).then((t=>{const{position:o,delay:n}=t;e(i).Notify.success(`Fulfilled promise ${o} in ${n}ms`)})).catch((t=>{const{position:o,delay:n}=t;e(i).Notify.failure(`Rejected promise ${o} in ${n}ms`)})),l+=Number(n);t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.e6d685b6.js.map