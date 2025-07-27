document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.getElementById("btn");
    const cancel= document.getElementById("cancel");
    const nav=document.querySelector("nav ul");



    btn.addEventListener('click',()=> nav.classList.toggle('show'));
    cancel.addEventListener('click',()=> nav.classList.remove('show'));
    if(window.AOS){
        AOS.init();
    }
})

