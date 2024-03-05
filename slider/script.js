const slider = document.querySelector('.slider')
let currentSlide = 0;
function showSlide(n){
    const slides = document.querySelectorAll('.slide')
    if (n > slides.length - 1){
        currentSlide = 0;
    }else if (n < 0){
        currentSlide = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    })
    slides[currentSlide].style.display = 'block';
}
function nextSlide(){
    currentSlide ++;
    showSlide(currentSlide);
}
setInterval(nextSlide, 4000)

const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

prevBtn.addEventListener('click', () => {
    currentSlide --;
    showSlide(currentSlide);
})
nextBtn.addEventListener('click', nextSlide)