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
}, 7000);  
 

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
document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class .tl-item
  const timelineItems = document.querySelectorAll('.tl-item');

  // Loop through each timeline item
  timelineItems.forEach(item => {
    // Add a click event listener to each item
    item.addEventListener('click', function() {
      // Get the ID of the clicked timeline item
      const itemId = item.id;

      // Call showPopup function with appropriate title and description for each revision
      switch(itemId) {
        case 'revision1':
          showPopup('Revision 1', 'Content about the first revision', './images/21.jpg');
          break;
        case 'revision2':
          showPopup('Revision 2', 'Content about the second revision', './images/21.jpg');
          break;
        case 'revision3':
          showPopup('Revision 3', 'Content about the third revision');
          break;
        // Add cases for other revisions as needed
      }
    });
  });

  // Add click event listener to close button of the popup
  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', function() {
    // Hide the popup when close button is clicked
    hidePopup();
  });
});