var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var slideIndex = 1;
showSlides(slideIndex);

// Function to advance the slider automatically
function autoSlide() {
    plusSlides(1); // Advance to the next slide
}

// Set the interval for automatic sliding (e.g., every 3 seconds)
var slideInterval = setInterval(autoSlide, 3000); // 3000 milliseconds (3 seconds)

// Pause the automatic sliding when the user hovers over the slider (optional)
var slider = document.getElementById("yourSliderId"); // Replace with your slider's ID
slider.addEventListener("mouseenter", function() {
    clearInterval(slideInterval); // Pause the automatic sliding
});

// Resume automatic sliding when the user leaves the slider (optional)
slider.addEventListener("mouseleave", function() {
    slideInterval = setInterval(autoSlide, 3000); // Resume automatic sliding
});