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
        dot.forEach((dots)=> dots.classList.remove("active"));

        slideAtual = (index + slides.length) % slides.length;

        slides[slideAtual].classList.add("active");
        dot[slideAtual].classList.add("active");
    }

    function nextSlide (){
        showSlide(slideAtual + 1);
    }

    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        slideIntervalo = setInterval(nextSlide, 5000);
    }
    function stopSlide(){
        clearInterval(slideIntervalo);
    }

    nextBtn.addEventListener("click", ()=>{
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", ()=>{
        prevSlide();
        stopSlide();
        startSlide();
    });

    startSlide();
}); //Fechamento do evento do evento carregar página

// => é a function