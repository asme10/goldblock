// Mobile Design 
const mobileMenu = () => {
    const btnToggle = document.querySelector(".btn-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
    const menuActive = document.querySelector(".navbar-menu li");
  
    btnToggle.addEventListener("clic  k", () => {
      navbarMenu.classList.toggle("menu-active");
    });
  };
  const closeMenu = () => {
    const navbarMenu = document.querySelector(".navbar-menu");
    const menuLi = document.querySelector(".navbar-menu li:nth-child(1)");
    const menuActive = document.querySelector(".navbar-menu");
  
    navbarMenu.addEventListener("click", () => {
      navbarMenu.classList.toggle("menu-active");
    });
  };
  
  mobileMenu();
  closeMenu();

// Slider 

const sliderBtns = document.querySelectorAll('.slider-btn');
const slides = document.querySelectorAll('.img-slide');

let sliderNav = function(manual) {

    sliderBtns.forEach((slideBtn) => {
        slideBtn.classList.remove('slide-active');
    });
    
    slides.forEach((slide) => {
        slide.classList.remove('slide-active');
    });

    sliderBtns[manual].classList.add('slide-active');
    slides[manual].classList.add('slide-active');
}

sliderBtns.forEach((slideBtn, i) => {
    slideBtn.addEventListener('click', ()=> {
        sliderNav(i);
    });
});
