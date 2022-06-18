const slides = document.querySelectorAll(".slide");

let curSlide = 0;
let maxSlide = slides.length - 1;

function translateSlide(){
    slides[1].style.transform = "translateX(100%)";
}

setInterval(function() {
    if(curSlide === maxSlide){
        curSlide = 0;
    } else{
        curSlide++
    }
    
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${(indx - curSlide) * 100}%)`;
    })
}, 6000);