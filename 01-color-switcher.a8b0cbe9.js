!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body,d=0;e.disabled=!0;t.addEventListener("click",(function(n){d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(a){t.disabled=!1,e.disabled=!0,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.a8b0cbe9.js.map
