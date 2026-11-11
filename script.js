
/* ==========================================
   PORTFOLIO WEBSITE - INTAN SONIA
   JAVASCRIPT INTERACTIVE
========================================== */


/* ==========================================
   1. TYPING TEXT ANIMATION
========================================== */

const typingText = document.querySelector('.typing-text');

const professions = [
    'Web Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'Creative Designer'
];

let professionIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentText = professions[professionIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentText.substring(
        0,
        characterIndex
    );

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentText.length) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;

        professionIndex++;

        if (professionIndex >= professions.length) {
            professionIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}


/* ==========================================
   2. HAMBURGER MENU
========================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', function () {

        navMenu.classList.toggle('open');

        menuToggle.classList.toggle('active');

        const icon = menuToggle.querySelector('i');

        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }

    });

}


/* ==========================================
   3. CLOSE MENU AFTER CLICK
========================================== */

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {

    link.addEventListener('click', function () {

        navLinks.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');

        if (navMenu) {
            navMenu.classList.remove('open');
        }

        if (menuToggle) {
            menuToggle.classList.remove('active');

            const icon = menuToggle.querySelector('i');

            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }

    });

});


/* ==========================================
   4. NAVBAR SCROLL EFFECT
========================================== */

const header = document.querySelector('header');

window.addEventListener('scroll', function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});


/* ==========================================
   5. ACTIVE NAVBAR WHEN SCROLLING
========================================== */

const sections = document.querySelectorAll('section[id]');

function updateActiveMenu() {

    let currentSection = 'home';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === '#' + currentSection
        ) {
            link.classList.add('active');
        }

    });

}

window.addEventListener('scroll', updateActiveMenu);


/* ==========================================
   6. SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    '.home-content, .home-image, .section-title, .about-content, .skill-card, .portfolio-card, .contact-content'
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {

    element.classList.add('reveal');

    revealObserver.observe(element);

});


/* ==========================================
   7. PORTFOLIO FILTER
========================================== */

const filterButtons = document.querySelectorAll('.filter-btn');

const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {

    button.addEventListener('click', function () {

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        portfolioCards.forEach(card => {

            const category = card.getAttribute('data-category');

            if (
                filterValue === 'all' ||
                filterValue === category
            ) {

                card.style.display = 'block';

            } else {

                card.style.display = 'none';

            }

        });

    });

});


/* ==========================================
   8. BACK TO TOP BUTTON
========================================== */

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function () {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.classList.add('show');

    } else {

        backToTop.classList.remove('show');

    }

});

if (backToTop) {

    backToTop.addEventListener('click', function () {

        window.scrollTo({

            top: 0,

            behavior: 'smooth'

        });

    });

}


/* ==========================================
   9. SMOOTH SCROLL NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        }

    });

});


/* ==========================================
   10. CONTACT FORM
========================================== */

const contactForm = document.querySelector('#contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value;

        alert(
            'Terima kasih, ' + name +
            '! Pesan kamu sudah diterima.'
        );

        contactForm.reset();

    });

}


/* ==========================================
   11. AUTOMATIC FOOTER YEAR
========================================== */

const yearElement = document.querySelector('#year');

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ==========================================
   12. WELCOME CONSOLE
========================================== */

console.log(
    'Welcome to Intan Sonia Portfolio Website!'
);

console.log(
    'Website berhasil dijalankan!'
);
