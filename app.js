const nextButton = document.getElementById('next');
nextButton.addEventListener('click', event => {
    plusSlides(1);
})
const backButton = document.getElementById('prev');
backButton.addEventListener('click', event => {
    plusSlides(-1);
})

// onclick="currentSlide(1)"
const dotBtns = document.getElementsByClassName('dot');
for(const dot of dotBtns) {
    dot.addEventListener('click', event => {
        currentSlide(event.target.id);
    })
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";

    const slides = document.getElementsByClassName('mySlides');
    for(const slide of slides) {
        slide.style.display = "none";
    }
    slideIndex++;
    (slideIndex > slides.length) ? slideIndex = 1: slideIndex;
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides, 5000);

}