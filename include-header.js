// **********************This load header 
// include-header.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and include the header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
});



// For creating boxes and scoll left to right 
const carousel = document.querySelector('.service-carousel');
const serviceItems = document.querySelectorAll('.service-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

const
    updateCarousel = () => {
        carousel.scrollLeft = currentIndex * (serviceItems[0].offsetWidth + 20);
    };

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + serviceItems.length) % serviceItems.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % serviceItems.length;
    updateCarousel();
});

// Initial delay and scrolling loop
setTimeout(() => {
    const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % serviceItems.length;
        updateCarousel();
    }, 2000);

    // Stop the interval after a certain duration
    setTimeout(() => {
        clearInterval(intervalId);
    }, 30000);
}, 2000);


// Add event listeners to booking buttons
const bookingBtns = document.querySelectorAll('.booking-btn');
bookingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Handle booking button click (e.g., open a new tab)
        window.open(btn.href, '_blank');
    });
});


/*******************To swich images in each cntainer  **********/
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const images = container.querySelectorAll('img');
    let currentIndex
        = 0;

    const updateImage = () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');

    };
