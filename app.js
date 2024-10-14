const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links");
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');


navToggle.addEventListener('click', function() {
    links.classList.toggle("show-links");
} );



// Show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

// Move to the next or previous slide
function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Open modal with project description
function openModal(event) {
    const description = event.target.getAttribute('data-description');
    modal.style.display = 'block';
    modalDescription.textContent = description;
    modalTitle.textContent = event.target.alt; // Set title to image alt text
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize the first slide
showSlide(currentSlide);

// Add click event listeners to images in slides
slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('click', openModal);
});
