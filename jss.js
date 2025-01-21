document.addEventListener('DOMContentLoaded', function () {
    const galleryCarousel = document.getElementById('galleryCarousel');
    const carouselInner = galleryCarousel.querySelector('.carousel-inner');

    // Function to load images from the folder
    function loadGalleryImages() {
        const images = [];
        const imageFiles = require('fs').readdirSync('./media/slider');
        
        imageFiles.forEach(file => {
            if (file.endsWith('.jpg') || file.endsWith('.png')) {
                images.push({ src: `media/slider_images/${file}` });
            }
        });
        
        // Create carousel items and append to the carousel inner
        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) item.classList.add('active');
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `Gallery Image ${index + 1}`;
            
            item.appendChild(img);
            carouselInner.appendChild(item);
        });
    }

    // Load images on page load
    loadGalleryImages();
});