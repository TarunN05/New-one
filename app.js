const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const btn = document.querySelector('.btn');

    burger.addEventListener('click', ()=>{
        btn.classList.toggle('nav-active')
        nav.classList.toggle('nav-active')
    });
   
}

navSlide();