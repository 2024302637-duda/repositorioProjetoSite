document.addEventListener("DOMContentLoaded", ()=>{
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");

    menuResponsivo.addEventListener("click", () =>{
        navMenu.classList.toggle("active");
    })
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            navMenu.classList.remove("active");
        });
    }); 

    //estrutura do carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    const dot = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn =document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach((slide)=> slide.classList.remove("active"));
        dot.forEach((dot)=> dot.classList.remove("active"));

        slideAtual = (index + slides.length) % slides.length;

        slides[slideAtual].classList.add("active");
        dot[slideAtual].classList.add("active");
    }
}); //Fechamento do evento do evento carregar página

// => é a function