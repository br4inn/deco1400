document.querySelector('.aw11').addEventListener('click', function() {
    window.location.href = 'first_generation.html';
});

document.querySelector('.sw20').addEventListener('click', function() {
    window.location.href = 'second_generation.html';
});

document.querySelector('.mrs').addEventListener('click', function() {
    window.location.href = 'third_generation.html';
});



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}