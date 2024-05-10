// Inspiration taken from Jemima Abu, webdesign.tuts
const slidesContainer = document.getElementById("slides-container");
const slideIndicatorsContainer = document.getElementById("slide-indicators");
const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

// Function to update the active slide indicator
function updateSlideIndicator(index) {
  const indicators = document.querySelectorAll(".slide-indicator");
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active-slide");
    } else {
      indicator.classList.remove("active-slide");
    }
  });
}

// Initialize slide indicators
slides.forEach((slide, index) => {
  const indicator = document.createElement("span");
  indicator.classList.add("slide-indicator");
  indicator.addEventListener("click", () => {
    currentSlideIndex = index;
    updateSlideIndicator(currentSlideIndex);
    slidesContainer.scrollLeft = slides[currentSlideIndex].offsetLeft;
  });
  slideIndicatorsContainer.appendChild(indicator);
});

// Update active slide indicator initially
updateSlideIndicator(currentSlideIndex);

// Automatically scroll to the next slide every 7 seconds
const autoScroll = setInterval(() => {
  slidesContainer.scrollLeft += slides[currentSlideIndex].offsetWidth;
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Reset to the first image
    slidesContainer.scrollLeft = 0; // Scroll back to the first image
  }
  updateSlideIndicator(currentSlideIndex);
}, 7000); // Changed interval to 7000 milliseconds (7 seconds)
 

function showPopup(title, description, image) {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  const popupTitle = popupContent.querySelector(".popup-title");
  const popupDescription = popupContent.querySelector(".popup-description");
  const popupImage = popupContent.querySelector(".popup-image");

  popupTitle.textContent = title;
  popupDescription.textContent = description;
  popupImage.src = image; // Set the image source

  popup.style.display = "block";
}

function hidePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

