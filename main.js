// JavaScript for Wedding Invitation Website
// Built by Asad Mirza | GitHub: https://github.com/asadmirza-34

window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 800);
        });

        // --- Music Player Logic ---
        const musicSource = "Music/Enrique_Iglesias_Maria_Becerra_-_As_es_la_vida_Karaoke_Instrumental_256KBPS.webm"; 
        const audio = new Audio(musicSource);
        audio.loop = true;
        let isPlaying = false;

        const musicBtn = document.getElementById('music-btn');
        const iconWrapper = document.getElementById('icon-wrapper');
        const musicText = document.getElementById('music-text');        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                iconWrapper.innerHTML = '<iconify-icon icon="solar:music-library-2-linear" width="20"></iconify-icon>';
                musicText.innerText = "Play Audio";
                musicBtn.classList.remove('bg-white', 'text-black');
                musicBtn.classList.add('bg-white/10', 'text-white');
            } else {
                audio.play();
                iconWrapper.innerHTML = '<iconify-icon icon="solar:pause-linear" width="20"></iconify-icon>';
                musicText.innerText = "Pause Audio";
                musicBtn.classList.add('bg-white', 'text-black');
                musicBtn.classList.remove('bg-white/10', 'text-white');
            }
            isPlaying = !isPlaying;
        });

        const weddingDate = new Date("May 31, 2026 10:00:00").getTime();
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(document.getElementById("days")) {
                document.getElementById("days").innerText = days.toString().padStart(2, '0');
                document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
                document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
                document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
            }
        }, 1000);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.getElementById('lightbox-close');
        
        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('click', (e) => {
                lightboxImg.src = e.target.src;
                lightbox.classList.remove('closed');
                lightbox.classList.add('open');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            lightbox.classList.add('closed');
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeLightbox();
        });

        const form = document.getElementById('rsvp-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you, your details has been successfully submitted.');
            form.reset();
        });