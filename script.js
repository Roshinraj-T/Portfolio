// ========== Smooth Scroll & Navigation ========== //
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Active Navigation on Scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // ========== Scroll Reveal Animation ========== //
    const revealElements = document.querySelectorAll('.edu-card, .skill-category, .project-card, .achievement-card, .contact-card');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('reveal', 'active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // ========== Typing Effect for Hero Subtitle ========== //
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);

    // ========== Counter Animation for Numbers ========== //
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    // ========== Smooth Scroll for Links ========== //
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Parallax Effect on Hero ========== //
    const heroText = document.querySelector('.hero-text');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;

        if (heroText) {
            heroText.style.transform = `translateY(${parallax}px)`;
        }
    });

    // ========== Floating Cards Animation Enhancement ========== //
    const floatingCards = document.querySelectorAll('.floating-card');

    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1) rotate(5deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // ========== Skill Items Hover Effect ========== //
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
            this.style.color = 'white';
            const icon = this.querySelector('i');
            const span = this.querySelector('span');
            if (icon) icon.style.color = 'white';
            if (span) span.style.color = 'white';
        });

        item.addEventListener('mouseleave', function() {
            this.style.background = 'white';
            this.style.color = '';
            const icon = this.querySelector('i');
            const span = this.querySelector('span');
            if (icon) icon.style.color = '#6366f1';
            if (span) span.style.color = '#1f2937';
        });
    });

    // ========== Project Cards Tilt Effect ========== //
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========== Achievement Cards Pulse Effect ========== //
    const achievementCards = document.querySelectorAll('.achievement-card');

    achievementCards.forEach(card => {
        const icon = card.querySelector('.achievement-icon');

        card.addEventListener('mouseenter', () => {
            icon.style.animation = 'pulse 0.6s ease-in-out';
        });

        card.addEventListener('mouseleave', () => {
            icon.style.animation = '';
        });
    });

    // Add pulse animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    document.head.appendChild(style);

    // ========== Loading Animation ========== //
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ========== Contact Cards Hover Enhancement ========== //
    const contactCards = document.querySelectorAll('.contact-card');

    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'rotate(360deg) scale(1.1)';
                icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });

    // ========== Education Cards Animation ========== //
    const eduCards = document.querySelectorAll('.edu-card');

    eduCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;

        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.edu-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.edu-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // ========== Social Links Animation ========== //
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
        icon.classList.add('fade-in');
    });

    // ========== Timeline Dot Pulse ========== //
    const timelineDot = document.querySelector('.timeline-dot');

    if (timelineDot) {
        setInterval(() => {
            timelineDot.style.animation = 'pulse 1s ease-in-out';
            setTimeout(() => {
                timelineDot.style.animation = '';
            }, 1000);
        }, 3000);
    }

    // ========== Tech Stack Tags Hover ========== //
    const techTags = document.querySelectorAll('.tech-stack span');

    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 8px rgba(99, 102, 241, 0.3)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });

    // ========== Highlight Tags Interaction ========== //
    const highlightTags = document.querySelectorAll('.highlight-tag');

    highlightTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
            this.style.color = 'white';
            const icon = this.querySelector('i');
            if (icon) icon.style.color = 'white';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.background = '#f9fafb';
            this.style.color = '#6b7280';
            const icon = this.querySelector('i');
            if (icon) icon.style.color = '#6366f1';
        });
    });

    // ========== Cursor Trail Effect (Optional) ========== //
    let cursorTrail = [];
    const trailLength = 10;

    document.addEventListener('mousemove', (e) => {
        cursorTrail.push({ x: e.clientX, y: e.clientY });

        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
    });

    // ========== Scroll to Top Button ========== //
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-3px)';
        this.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
    });

    // ========== Console Easter Egg ========== //
    console.log('%c👋 Hey there, curious developer!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%cLooks like you\'re checking out my code. I like your style! 🚀', 'color: #8b5cf6; font-size: 14px;');
    console.log('%cFeel free to reach out: roshin180701@gmail.com', 'color: #ec4899; font-size: 12px;');
});
