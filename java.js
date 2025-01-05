// JavaScript untuk meningkatkan interaktivitas halaman

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Parallax Effect
const mainHome = document.querySelector('.main-home');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    mainHome.style.backgroundPositionY = `${offset * 0.5}px`;
});

// Pop-up Gallery
const galleryImages = document.querySelectorAll('.products img');
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="popup-content">
                <img src="${image.src}" alt="${image.alt}">
                <span class="close">&times;</span>
            </div>`;
        document.body.appendChild(popup);

        // Close Pop-up
        const closeBtn = popup.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            popup.remove();
        });
    });
});
