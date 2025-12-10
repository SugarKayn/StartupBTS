document.addEventListener('DOMContentLoaded', () => {
/* =========================================
   Partie: Carousel 
   ========================================= */
    const catalogSlides = document.querySelectorAll('.catalog-slide');
    const catNext = document.getElementById('cat-next');
    const catPrev = document.getElementById('cat-prev');
    
    if (catalogSlides.length > 0) {
        let catIndex = 0;
        let catIsMoving = false; 
        let catAutoSlideTimer;
        const catSlideInterval = 4000;

        function showCatalogSlide(index) {
            catalogSlides.forEach(slide => slide.classList.remove('active'));
            catalogSlides[index].classList.add('active');
        }

        function nextCatalogSlide() {
            if (catIsMoving) return; 
            catIsMoving = true;     
            catIndex++;
            if (catIndex >= catalogSlides.length) {
                catIndex = 0; 
            }
            showCatalogSlide(catIndex);

            setTimeout(() => (catIsMoving = false), 600);
        }

        function prevCatalogSlide() {
            if (catIsMoving) return; 
            catIsMoving = true; 

            catIndex--;
            if (catIndex < 0) {
                catIndex = catalogSlides.length - 1; 
            }
            showCatalogSlide(catIndex);

            setTimeout(() => (catIsMoving = false), 600);
        }

        function startCatalogAutoSlide() {
            catAutoSlideTimer = setInterval(nextCatalogSlide, catSlideInterval);
        }

        function restartCatalogAutoSlide() {
            clearInterval(catAutoSlideTimer);
            startCatalogAutoSlide();
        }

        catNext.addEventListener('click', () => {
            nextCatalogSlide();
            restartCatalogAutoSlide();
        });

        catPrev.addEventListener('click', () => {
            prevCatalogSlide();
            restartCatalogAutoSlide();
        });

        showCatalogSlide(catIndex);
        startCatalogAutoSlide();
    }
/* =========================================
    Partie: Contact 
   ========================================= */
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
    // Partie: Bouton Wishlist
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