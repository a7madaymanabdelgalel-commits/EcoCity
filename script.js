function scrollDown(){
document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

function sendMessage(){
alert("تم إرسال رسالتك بنجاح");
}

function toggleMode(){
document.body.classList.toggle("dark");
}

window.onscroll=function(){
let btn=document.getElementById("topBtn");
if(document.documentElement.scrollTop>300){
btn.style.display="block";
}else{
btn.style.display="none";
}
}

function topFunction(){
document.documentElement.scrollTop=0;
}

function animateCounter(id,max){
let count=0;
let element=document.getElementById(id);
let interval=setInterval(()=>{
if(count<max){
count+=Math.ceil(max/100);
element.textContent=count;
}else{
clearInterval(interval);
}
},30);
}

animateCounter("counter1",1200);
animateCounter("counter2",5400);
animateCounter("counter3",890);
