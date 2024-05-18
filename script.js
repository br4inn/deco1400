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
  // Get all elements with class .tl-item (the timeline)
  const timelineItems = document.querySelectorAll('.tl-item');

  // Loop through each timeline generation/item
  timelineItems.forEach(item => {
    // Add a click event listener to each item
    item.addEventListener('click', function() {
      // Get the ID of the clicked timeline item
      const itemId = item.id;

      // Call showPopup function with appropriate title and description for each revision
      switch(itemId) {
        case 'revision1':
            showPopup('Revision 1', 'The first revision of the MR2 SW20, introduced in 1989, marked a significant milestone in the evolution of Toyotas iconic sports car. Boasting a sleek and aerodynamic design, this iteration captivated enthusiasts with its fusion of style and performance. Under the hood, the SW20 featured a range of potent engines, including the turbocharged 3S-GTE, delivering exhilarating acceleration and dynamic handling. Its mid-engine layout, coupled with rear-wheel drive, ensured exceptional balance and agility, making it a joy to drive on both road and track. Equipped with advanced features such as T-bar removable roof panels and electronic suspension control, the SW20 set new standards for sports car innovation and versatility. With its timeless design and formidable performance, the first revision of the MR2 SW20 remains a cherished icon among automotive aficionados.', './images/gen1.jpg');
            break;
        case 'revision2':
            showPopup('Revision 2', 'Revision 2 of the MR2 SW20, introduced in January 1992 for the model year 1993, brought a host of enhancements that further elevated the cars performance and driving experience. Among the notable upgrades was the adoption of the 3S-GE engine, delivering refined power and responsiveness. The rear suspension saw revisions with longer toe links, enhancing stability and cornering prowess, while the front suspension underwent changes that eliminated castor angle adjustment. This iteration sported a larger front lip for improved aerodynamics and a more aggressive stance, complemented by 15-inch wheels and wider tires on all models, providing enhanced grip and traction. Furthermore, turbo models in the US market received larger brakes, while all cars in the Japanese and European markets enjoyed this upgrade. Inside the cabin, drivers experienced a more tactile shift feel with a shorter shift lever and smaller knob, enhancing the connection between driver and machine. Additionally, turbo variants in the US market were exclusively offered with a T-bar roof, adding to the cars open-air driving appeal. As the MR2 continued to evolve, Canadian sales concluded after 1993, marking the end of an era for Canadian enthusiasts. Moreover, on the Japanese market models, Electronic Brake Force Distribution (EBFD) and Traction Control (TC) were introduced as optional features, further enhancing safety and stability. Through these revisions, the MR2 SW20 Revision 2 reaffirmed its status as a benchmark for sports car excellence, combining performance, agility, and innovation in a captivating package.', './images/gen2.jpg');
            break;
        case 'revision3':
            showPopup('Revision 3', 'Revision 3 of the MR2 SW20, introduced several enhancements that further refined the cars performance and appearance, catering to the discerning tastes of enthusiasts worldwide. In the European and Japanese markets, the 3S-GE engine received a power boost, now delivering an impressive 173 horsepower, while the Japanese 3S-GTE (Gen 3) soared to new heights with a rating of 245 PS (180 kW; 242 hp), showcasing Toyotas commitment to delivering exhilarating performance. Notably, the American market saw upgrades to the 5S-FE engine, now rated at 135 horsepower (101 kW), while Turbo models retained the Gen 2 3S-GTE engine. Visually, the SW20 received updates such as round "Kouki" tail lights and a revised one-piece rear wing, adding a touch of modernity to its timeless design. The addition of a color-coded center panel, front lip, and side skirts further accentuated its sleek silhouette. Safety features were also bolstered, with the inclusion of a passenger airbag (excluding the Japanese market) and a standard Viscous Limited Slip Differential (LSD) in Japanese market Turbo models. Additionally, improvements to the transmission, ABS system, and electronic power steering system (EHPS) enhanced driving dynamics and safety. However, this revision marked the end of an era for American enthusiasts, as sales ceased in 1995, with Turbo models no longer offered in California-emission states after 1994. Through these upgrades, the MR2 SW20 Revision 3 continued to captivate drivers with its blend of performance, style, and technological innovation, leaving an indelible mark on automotive history.', './images/rev3.jpg');
            break;
        case 'revision4':
            showPopup('Revision 4', 'Revision 4 of the MR2 SW20 brought forth a series of notable updates, further refining the cars design and enhancing its safety features. Across all models, fender-mounted turn signals became a standard feature, not only improving visibility but also adding a touch of sophistication to the vehicles exterior. Additionally, the introduction of 5-spoke alloy wheels with diamond-cut faces elevated the SW20s aesthetic appeal, showcasing Toyotas commitment to meticulous craftsmanship. In response to evolving safety standards, a passenger airbag was made available as an option in the Japanese market, offering occupants an added layer of protection in the event of a collision. Further enhancements were made to the ABS system, ensuring optimal braking performance in diverse driving conditions. However, in the European market, the 3S-GE engine underwent a slight power reduction to 168 horsepower, attributed to the introduction of Exhaust Gas Recirculation (EGR) technology aimed at reducing emissions. Despite these advancements, Revision 4 was notably absent from the North American market, marking a departure from previous iterations and signaling a shift in Toyotas regional strategy. Overall, Revision 4 represented a continuation of Toyotas pursuit of excellence, blending innovation, safety, and performance to deliver an unparalleled driving experience for enthusiasts around the world.', './images/rev4.jpg');
            break;
        case 'revision5':
            showPopup('Revision 5', 'Revision 5 of the MR2 SW20 introduced a series of refinements and updates aimed at enhancing both the aesthetic appeal and performance of the iconic sports car. One notable change was the adoption of clear fender-mounted turn signals, providing a sleek and modern look while maintaining visibility on the road. Additionally, new 15-inch wheels featuring narrower spokes were introduced, adding a touch of sophistication to the vehicles exterior design. The adjustable rear spoiler, a staple of earlier versions, underwent revision, further optimizing aerodynamics and enhancing the cars overall profile. Inside the cabin, subtle yet impactful changes included the introduction of red rings around the gauges and red stitching on the leather-wrapped shift knob, adding a sporty flair to the interior aesthetic. Moreover, turbo models received leather seats adorned with red stitching, elevating the level of luxury and comfort. Perhaps the most significant update was reserved for the Japanese market, where the new BEAMS 3S-GE engine made its debut, boasting an impressive output of 200 horsepower (147 kW; 197 hp). This powerful engine addition underscored Toyotas commitment to delivering exhilarating performance and cutting-edge technology to enthusiasts in Japan. Overall, Revision 5 represented a culmination of Toyotas dedication to innovation and refinement, further solidifying the MR2 SW20s status as a timeless classic in the world of sports cars.', './images/rev5.jpg');
            break;
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


// Inspiration taken from Joel Olawanle https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
document.addEventListener('DOMContentLoaded', () => {
  const openFormButton = document.getElementById('openFormButton');
  const closeButton = document.querySelector('.form-popup-close');
  const submitButton = document.getElementById('submitButton');

  openFormButton.addEventListener('click', () => {
      showFormPopup( '');
  });

  closeButton.addEventListener('click', function() {
      hideFormPopup();
  });

  submitButton.addEventListener('click', function () {
      // Check if all fields are filled out before submitting otherwise give error message
      const nameInput = document.getElementById('name');
      const locationInput = document.getElementById('location');
      const reviewInput = document.getElementById('review');
      
      if (nameInput.value.trim() === '' || locationInput.value.trim() === '' || reviewInput.value.trim() === '') {
          alert('Please fill out all fields.');
          return; // Don't submit the form if any field is empty
      }
      
      // If all fields are filled out, user can proceed with form submission
      alert('Form submitted!');
  });
});


function showFormPopup(description) {
  const popup = document.getElementById('formPopup');
  const overlay = document.getElementById('formOverlay');
  const popupDescription = document.querySelector('.form-popup-description');
  
  popupDescription.textContent = description;

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function hideFormPopup() {
  const popup = document.getElementById('formPopup');
  const overlay = document.getElementById('formOverlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

window.addEventListener('click', function(event) {
  const popup = document.getElementById('formPopup');
  const overlay = document.getElementById('formOverlay');
  if (event.target === overlay) {
      hideFormPopup();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.getElementById('reviewForm');
  const formPopup = document.getElementById('formPopup');

  reviewForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();

      // Hide the popup
      formPopup.classList.add('hidden');
  });
});