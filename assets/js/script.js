document.addEventListener('DOMContentLoaded', () => {
    // S'assure que tout le HTML est chargé avant de lancer le script
    
    /* =========================================
       Partie: Carousel (Catalogue)
       ========================================= */
    const catalogSlides = document.querySelectorAll('.catalog-slide');
    const catNext = document.getElementById('cat-next');
    const catPrev = document.getElementById('cat-prev');
    
    // On ne lance le code que si le carrousel existe sur la page
    if (catalogSlides.length > 0) {
        let catIndex = 0;
        let catIsMoving = false; // Pour éviter le spam-click
        let catAutoSlideTimer;
        const catSlideInterval = 4000; 

        // Fonction pour changer la classe active (CSS gère l'affichage)
        function showCatalogSlide(index) {
            catalogSlides.forEach(slide => slide.classList.remove('active'));
            catalogSlides[index].classList.add('active');
        }

        function nextCatalogSlide() {
            if (catIsMoving) return; // Si une animation est en cours, on ignore le clic
            catIsMoving = true;     
            
            catIndex++;
            // Boucle infinie: si on dépasse la fin, on revient à 0
            if (catIndex >= catalogSlides.length) {
                catIndex = 0; 
            }
            showCatalogSlide(catIndex);

            // On déverrouille le clic après 600ms (temps de la transition CSS)
            setTimeout(() => (catIsMoving = false), 600);
        }

        function prevCatalogSlide() {
            if (catIsMoving) return; 
            catIsMoving = true; 

            catIndex--;
            // Boucle infinie : si on est avant 0, on va à la dernière image
            if (catIndex < 0) {
                catIndex = catalogSlides.length - 1; 
            }
            showCatalogSlide(catIndex);

            setTimeout(() => (catIsMoving = false), 600);
        }

        // Gestion du défilement automatique
        function startCatalogAutoSlide() {
            catAutoSlideTimer = setInterval(nextCatalogSlide, catSlideInterval);
        }

        function restartCatalogAutoSlide() {
            clearInterval(catAutoSlideTimer); // On coupe le timer actuel
            startCatalogAutoSlide();          // On en relance un neuf
        }

        // Écouteurs d'événements sur les flèches
        catNext.addEventListener('click', () => {
            nextCatalogSlide();
            restartCatalogAutoSlide(); // Reset du timer pour ne pas changer d'image juste après un clic
        });

        catPrev.addEventListener('click', () => {
            prevCatalogSlide();
            restartCatalogAutoSlide();
        });

        // Initialisation au chargement
        showCatalogSlide(catIndex);
        startCatalogAutoSlide();
    }

    /* =========================================
       Partie: Formulaire de Contact
       ========================================= */
    const form = document.getElementById('contactForm');
    
    if (form) {
        const nomInput = document.getElementById('nom');
        const emailInput = document.getElementById('email');
        const msgInput = document.getElementById('message');
        const successMsg = document.getElementById('success-msg');

        // On récupère le nom dans le LocalStorage si l'utilisateur est déjà venu
        const savedName = localStorage.getItem('auroraUserName');
        if (savedName) nomInput.value = savedName;

        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page (comportement par défaut)
            let isValid = true;

            // Validation du NOM (ne doit pas être vide)
            if (nomInput.value.trim() === '') {
                document.getElementById('error-nom').textContent = "Le nom est obligatoire.";
                nomInput.style.borderColor = '#ff6b6b'; // Feedback visuel rouge
                isValid = false;
            } else {
                document.getElementById('error-nom').textContent = "";
                nomInput.style.borderColor = '#333';
            }

            // Validation de l'EMAIL (via Regex standard)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Vérifie le format standard : "texte" + "@" + "domaine" + "." + "extension" (sans espaces)
            if (!emailRegex.test(emailInput.value)) {
                document.getElementById('error-email').textContent = "Email invalide.";
                emailInput.style.borderColor = '#ff6b6b';
                isValid = false;
            } else {
                document.getElementById('error-email').textContent = "";
                emailInput.style.borderColor = '#333';
            }

            // Validation du MESSAGE (Longueur min.)
            if (msgInput.value.length < 10) {
                document.getElementById('error-message').textContent = "Message trop court (min 10 car.)";
                msgInput.style.borderColor = '#ff6b6b';
                isValid = false;
            } else {
                document.getElementById('error-message').textContent = "";
                msgInput.style.borderColor = '#333';
            }

            // SI TOUT EST VALIDE
            if (isValid) {
                // On sauvegarde le nom pour la prochaine visite (persistance des données)
                localStorage.setItem('auroraUserName', nomInput.value);
                
                // Affichage du succès
                successMsg.classList.add('success-visible');
                form.reset(); // On vide le formulaire
                
                // On cache le message de succès après 5 secondes
                setTimeout(() => {
                    successMsg.classList.remove('success-visible');
                }, 5000);
            }
        });
    }

    /* =========================================
       Partie: Bouton Wishlist (Simple Toggle)
       ========================================= */
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            // Bascule la classe CSS '.added' pour changer le style (néon)
            this.classList.toggle('added');
            
            // Change le texte selon l'état
            if(this.classList.contains('added')) {
                this.textContent = "Dans la liste !";
            } else {
                this.textContent = "Wishlist";
            }
        });
    }

});