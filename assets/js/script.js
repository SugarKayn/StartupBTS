document.addEventListener('DOMContentLoaded', () => {

    // ==================================================================
    // CAROUSEL 
    // ==================================================================
    const track = document.querySelector('.carousel-slide');
    

    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.getElementById('next-btn');
        const prevButton = document.getElementById('prev-btn');

        let currentIndex = 0;
        let isMoving = false;
        let autoSlideTimer;
        const slideInterval = 4000;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            if (isMoving) return;
            isMoving = true;
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
            setTimeout(() => (isMoving = false), 600);
        }

        function prevSlide() {
            if (isMoving) return;
            isMoving = true;
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
            setTimeout(() => (isMoving = false), 600);
        }

        function startAutoSlide() {
            autoSlideTimer = setInterval(nextSlide, slideInterval);
        }

        function restartAutoSlide() {
            clearInterval(autoSlideTimer);
            startAutoSlide();
        }




        nextButton.addEventListener('click', () => {
            nextSlide();
            restartAutoSlide();
        });

        prevButton.addEventListener('click', () => {
            prevSlide();
            restartAutoSlide();
        });

        showSlide(currentIndex);
        startAutoSlide();
    }


    // ==================================================================
    // FORMULAIRE DE CONTACT 
    // ==================================================================
    const form = document.getElementById('contactForm');
    
    if (form) {
        const nomInput = document.getElementById('nom');
        const emailInput = document.getElementById('email');
        const msgInput = document.getElementById('message');
        const successMsg = document.getElementById('success-msg');

    
        const savedName = localStorage.getItem('auroraUserName');
        if (savedName) nomInput.value = savedName;

        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            let isValid = true;

            if (nomInput.value.trim() === '') {
                document.getElementById('error-nom').textContent = "Le nom est obligatoire.";
                nomInput.style.borderColor = '#ff6b6b';
                isValid = false;
            } else {
                document.getElementById('error-nom').textContent = "";
                nomInput.style.borderColor = '#333';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                document.getElementById('error-email').textContent = "Email invalide.";
                emailInput.style.borderColor = '#ff6b6b';
                isValid = false;
            } else {
                document.getElementById('error-email').textContent = "";
                emailInput.style.borderColor = '#333';
            }

            if (msgInput.value.length < 10) {
                document.getElementById('error-message').textContent = "Message trop court (min 10 car.)";
                msgInput.style.borderColor = '#ff6b6b';
                isValid = false;
            } else {
                document.getElementById('error-message').textContent = "";
                msgInput.style.borderColor = '#333';
            }

            if (isValid) {
                localStorage.setItem('auroraUserName', nomInput.value);
                successMsg.classList.add('success-visible');
                form.reset();
                setTimeout(() => {
                    successMsg.classList.remove('success-visible');
                }, 5000);
            }
        });
    }

    // ==================================================================
    // BOUTON WISHLIST 
    // ==================================================================
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('added');
            if(this.classList.contains('added')) {
                this.textContent = "Dans la liste !";
            } else {
                this.textContent = "Wishlist";
            }
        });
    }

});