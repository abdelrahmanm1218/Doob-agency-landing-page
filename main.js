//Progress bar
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop/height)*100}%`;
})
/*------------------------------------------------------------------------------------------------------*/
let btn = document.getElementById("scroll-top");
btn.onclick = ()=> {
    window.scrollTo({top:0,left:0,behavior:"smooth"});
};