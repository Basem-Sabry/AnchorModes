document.querySelector(".toogler .fa-gear").onclick=function(){
    this.classList.toggle("fa-spin")
    document.querySelector(".settings-box").classList.toggle("open")
}
const colorslist= document.querySelectorAll('.colors-list li');
colorslist.forEach(li=>{
li.addEventListener("click",(e)=>{
document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
e.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
})
e.target.classList.add("active");
});
});



let landingPage = document.querySelector(".landing-page");
let imgarray=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
setInterval(()=>{

let randomnum=Math.floor(Math.random()*imgarray.length);
landingPage.style.backgroundImage='url("imgs/'+imgarray[randomnum]+'") ';

},10000)