
const galleryCarousel = document.getElementById('galleryCarousel');
const carouselInner = galleryCarousel.querySelector('.carousel-inner');

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'es,fr,it', // Add languages you want to support
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Function to load images from the folder
function loadGalleryImages() {
    const images = [
        { src: 'media/slider/cdc-EpMIv296POE-unsplash.jpg' },
        { src: 'media/slider/monica-sedra-riajHP6CCQU-unsplash.jpg' },
        { src: 'media/slider/sigmund-TJxotQTUr8o-unsplash.jpg' },
    ];

    // Create carousel items and append to the carousel inner
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = `Gallery Image ${index + 1}`;
        img.classList.add('img-fluid', 'rounded'); // Add Bootstrap classes

        item.appendChild(img);
        carouselInner.appendChild(item);
    });
}

// Load images on page load
loadGalleryImages();

// Initialize Google Translate
googleTranslateElementInit();
