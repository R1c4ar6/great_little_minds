
// Var declaration
// const galleryCarousel = document.getElementById('galleryCarousel');
// const carouselInner = galleryCarousel.querySelector('.carousel-inner');
const heroElement = document.getElementById('hero');

const images = [
    { src: 'media/gallery/cdc-EpMIv296POE-unsplash.jpg' },
    { src: 'media/gallery/WhatsApp Image 2025-01-22 at 17.39.23.jpeg'},
    { src: 'media/gallery/monica-sedra-riajHP6CCQU-unsplash.jpg' },
    { src: 'media/gallery/WhatsApp Image 2025-01-22 at 17.39.22.jpeg'},
    { src: 'media/gallery/sigmund-TJxotQTUr8o-unsplash.jpg' },
    { src: 'media/gallery/WhatsApp Image 2025-01-22 at 17.39.23(1).jpeg'},
    { src: 'media/gallery/WhatsApp Image 2025-01-22 at 17.51.07.jpeg'}
];

const heroBackgroundImages = [
    { src: 'media/hero_bg/frank-mckenna-LhOjrOlcLx4-unsplash.jpg' },
    { src: 'media/hero_bg/ashton-bingham-SAHBl2UpXco-unsplash.jpg' },
    { src: 'media/hero_bg/hisu-lee-in9QlspOG6w-unsplash.jpg' },
    { src: 'media/hero_bg/julia-vMZ9VV4dA5A-unsplash.jpg' }
];

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es,fr,it', // Add languages you want to support
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Function to load images from the folder
// function loadGalleryImages() {
//     // Create carousel items and append to the carousel inner
//     images.forEach((image, index) => {
//         const item = document.createElement('div');
//         item.classList.add('carousel-item');
//         if (index === 0) item.classList.add('active');

//         const img = document.createElement('img');
//         img.src = image.src;
//         img.alt = `Gallery Image ${index + 1}`;
//         img.classList.add('img-fluid', 'rounded'); // Add Bootstrap classes

//         item.appendChild(img);
//         carouselInner.appendChild(item);
//     });
// }

function getRandomBg() {
    let randomIndex = Math.floor(Math.random() * heroBackgroundImages.length);
    return `url('${heroBackgroundImages[randomIndex].src}')`;
}

// Randomizing the background image
function changeHeroBackground() {
    heroElement.style.background = getRandomBg();
    heroElement.style.backgroundSize = 'cover'; // Ensure the image covers the entire hero section
    heroElement.style.backgroundPosition = 'center'; // Center the background image
    heroElement.style.backgroundRepeat = 'no-repeat';
    heroElement.style.transition = 'background-image 1s ease-in-out';
}

document.addEventListener('DOMContentLoaded', () => {
    const testimonialsCarousel = new bootstrap.Carousel('#testimonialsCarousel', {
        interval: 5000, // Automatically cycle every 5 seconds
        ride: 'carousel'
    });

    const galleryContainer = document.querySelector('#gallery .row'); // Target the gallery row
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal')); // Initialize Bootstrap modal
    const modalImage = document.getElementById('lightboxImage'); // Target the modal image

    images.forEach((image, index) => {
        // Create the column div
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-4 mb-4';

        // Create the image tag
        const img = document.createElement('img');
        img.src = image.src; // Set the image source
        img.alt = `Gallery Image ${index + 1}`;
        img.className = 'img-fluid rounded shadow-sm'; // Add classes for styling
        img.style.cursor = 'pointer'; // Make it clear the image is clickable

        // Add click event to open modal
        img.addEventListener('click', () => {
            modalImage.src = image.src; // Set the modal image source
            modal.show(); // Show the modal
        });

        // Append the image to the column, and the column to the container
        colDiv.appendChild(img);
        galleryContainer.appendChild(colDiv);
    });
});

// Initial background set
changeHeroBackground();

// Change background every 5 minutes
setInterval(changeHeroBackground, 5 * 60 * 1000);

// Load images on page load
// loadGalleryImages();

// Initialize Google Translate
googleTranslateElementInit();
