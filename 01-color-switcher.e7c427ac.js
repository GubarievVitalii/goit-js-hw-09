!function(){var t=null,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function o(t){n.disabled=t}function c(t){e.disabled=t}n.addEventListener("click",(function(){o(!0),c(!1),t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){o(!1),c(!0),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.e7c427ac.js.map
