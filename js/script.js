const slides = document.querySelectorAll(".slide");

let curSlide = 0;
let maxSlide = slides.length - 1;

function translateFirstSlide(){
    slides[1].style.transform = "translateX(100%)";
}

function translateSlide(){
let myInterval = setInterval(function() {
    if(curSlide === maxSlide){
        curSlide = 0;
    } else{
        curSlide++
    }
    
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${(indx - curSlide) * 100}%)`;
    })
}, 6000);

return myInterval
}


