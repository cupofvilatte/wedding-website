import{i as f}from"./injectHeaderFooter-BThVsy0A.js";function l(r,o){const n=document.querySelector(o);if(!n){console.error(`Coundown container not found: ${o}`);return}const s=new Date(r),e=()=>{const t=s-new Date;if(t<=0){n.textContent="It's the big day! 🎉",clearInterval(a);return}const c=Math.floor(t/(1e3*60*60*24)),u=Math.floor(t/(1e3*60*60)%24),i=Math.floor(t/(1e3*60)%60),d=Math.floor(t/1e3%60);n.textContent=`${c}d ${u}h ${i}m ${d}s`};e();const a=setInterval(e,1e3)}f();l("2025-06-13T16:00:00","#countdown");
