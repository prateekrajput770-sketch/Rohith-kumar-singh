// Smooth Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section,.item,.edu,.contact p,.skill-grid div").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// Navbar Background

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="#1b1d24";

nav.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

}else{

nav.style.background="#20232d";

nav.style.boxShadow="none";

}

});



// Image Hover

const image=document.querySelector(".image-box img");

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

image.style.transition=".4s";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});



// Typing Effect

const profession=document.querySelector(".hero-right p");

const text="Professional Cameraman";

let i=0;

profession.innerHTML="";

function typing(){

if(i<text.length){

profession.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();



// Scroll To Top Button

const btn=document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";

btn.style.bottom="25px";

btn.style.right="25px";

btn.style.width="50px";

btn.style.height="50px";

btn.style.border="none";

btn.style.borderRadius="50%";

btn.style.background="#20232d";

btn.style.color="#fff";

btn.style.fontSize="22px";

btn.style.cursor="pointer";

btn.style.display="none";

btn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

});

btn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
