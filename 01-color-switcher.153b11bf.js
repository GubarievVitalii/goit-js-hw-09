let t=null;const e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(t){e.disabled=t}function a(t){n.disabled=t}e.addEventListener("click",(function(){o(!0),a(!1),t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),n.addEventListener("click",(function(){o(!1),a(!0),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.153b11bf.js.map