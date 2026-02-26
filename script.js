function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function scrollToTop(){
window.scrollTo({top:0,behavior:"smooth"});
}

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

function toggleMenu(){
const nav=document.querySelector("nav ul");
nav.style.display=nav.style.display==="flex"?"none":"flex";
}

function filterType(type){
const cards=document.querySelectorAll(".card");
cards.forEach(card=>{
if(type==="all"){
card.style.display="block";
}else{
card.style.display=card.classList.contains(type)?"block":"none";
}
});
}

function animateCounter(id,target){
let count=0;
let interval=setInterval(()=>{
count++;
document.getElementById(id).textContent=count;
if(count>=target) clearInterval(interval);
},20);
}

window.onload=function(){
animateCounter("counter1",95);
animateCounter("counter2",17);
animateCounter("counter3",60);
}

function toggleFAQ(element){
let p=element.nextElementSibling;
p.style.display=p.style.display==="block"?"none":"block";
}

function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name===""||email===""||message===""){
alert("يرجى ملء جميع الحقول");
return false;
}
alert("تم إرسال الرسالة بنجاح");
return false;
}

function exitSite(){
window.close();
}
