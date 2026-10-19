const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
$$("#y").forEach(y=>y.textContent=new Date().getFullYear());
// chart bars grow when scrolled into view
const io=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.3});
$$(".ex").forEach(e=>io.observe(e));
// tech strip: duplicate content for a seamless loop
$$(".mq div").forEach(q=>q.innerHTML+=q.innerHTML);
// scroll-built website: progress through the tall section drives the stage
const B=$(".build"),M=$("#mock"),L=$$(".steps li");
function sc(){
  const r=B.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-innerHeight))),n=Math.min(4,Math.floor(p*5));
  L.forEach((l,i)=>l.classList.toggle("on",i===n));
  for(let i=1;i<5;i++)M.classList.toggle("s"+i,n>=i);
}
if(B&&M){addEventListener("scroll",sc,{passive:true});addEventListener("resize",sc);sc()}
// magnetic buttons (mouse only, skipped when reduced motion is on)
if(matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches)$$(".mag").forEach(b=>{
  b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.setProperty("--mx",(e.clientX-r.left-r.width/2)*.25+"px");b.style.setProperty("--my",(e.clientY-r.top-r.height/2)*.35+"px")});
  b.addEventListener("pointerleave",()=>{b.style.setProperty("--mx","0px");b.style.setProperty("--my","0px")});
});
// mobile menu
const ul=$("nav ul"),mb=$(".mb");if(ul&&mb){mb.onclick=()=>ul.classList.toggle("open");$$("nav a").forEach(a=>a.onclick=()=>ul.classList.remove("open"))}
// contact: chips + send to your existing process-form.php
$$("fieldset .chip").forEach(c=>c.onclick=()=>{$$(".chip",c.parentNode).forEach(x=>x.classList.remove("on"));c.classList.add("on")});
const form=$("#f");if(form)form.onsubmit=async e=>{
  e.preventDefault();
  const f=e.target,d=new FormData(f),st=$("#st");
  const picks=$$("fieldset",f).map(s=>{const o=$(".on",s);return o?s.dataset.k+": "+o.textContent:""}).filter(Boolean).join("\n");
  d.set("message",(picks?picks+"\n\n":"")+d.get("message"));
  st.textContent="Sending...";
  try{const r=await(await fetch("process-form.php",{method:"POST",body:d})).json();st.textContent=r.message;if(r.status==="success")f.reset()}
  catch{st.textContent="Message not sent. Please email me directly."}
};