/**
 * ============================================================
 * COPA TARIÁCURI - MAIN JAVASCRIPT
 * ============================================================
 * Funcionalidades:
 * 1. Cursor personalizado
 * 2. Intersection Observer para animaciones de entrada
 * 3. Efecto scroll interactivo del maguey
 * 4. Menú móvil responsive
 * 5. Header scroll behavior (logo que aparece)
 * 6. Smooth scroll para navegación interna
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    // VARIABLES GLOBALES
    // ============================================================
    const header = document.getElementById('header');
    const headerNav = document.getElementById('header-nav');
    const menuToggle = document.getElementById('header-menu-toggle');
    const heroSection = document.getElementById('hero');
    const heroMagueyContainer = document.getElementById('hero-maguey-container');
    const heroScrollIndicator = document.getElementById('hero-scroll-indicator');

    // Pencas del maguey
    const pencas = [
        document.getElementById('maguey-penca-1'),
        document.getElementById('maguey-penca-2'),
        document.getElementById('maguey-penca-3'),
        document.getElementById('maguey-penca-4'),
        document.getElementById('maguey-penca-5'),
        document.getElementById('maguey-penca-6'),
        document.getElementById('maguey-penca-7'),
        document.getElementById('maguey-penca-8')
    ];

    const corazon = document.getElementById('maguey-corazon');
    const logoEmerge = document.getElementById('maguey-logo-emerge');

    // ============================================================
    // 1. CURSOR PERSONALIZADO
    // ============================================================
    (function initCustomCursor() {
        // Solo en dispositivos con puntero fino (no táctiles)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border: 2px solid var(--secondary-text-color, #D5A760);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            transform: translate(-50%, -50%);
            transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, border-color 0.2s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);

        const cursorDot = document.createElement('div');
        cursorDot.className = 'custom-cursor-dot';
        cursorDot.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 6px;
            height: 6px;
            background: var(--secondary-text-color, #D5A760);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(cursorDot);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Efecto hover en elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .registro-btn, .contacto-form-submit, .juez-card, .concurso-card, .patrocinador-card');
        interactiveElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.background = 'rgba(213, 167, 96, 0.1)';
                cursor.style.borderColor = 'var(--title-color, #6D312E)';
            });
            el.addEventListener('mouseleave', function() {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.background = 'transparent';
                cursor.style.borderColor = 'var(--secondary-text-color, #D5A760)';
            });
        });
    })();

    // ============================================================
    // 2. INTERSECTION OBSERVER - ANIMACIONES DE ENTRADA
    // ============================================================
    (function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.section-animate');

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: dejar de observar después de animar
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(function(el) {
            observer.observe(el);
        });
    })();

    // ============================================================
    // 3. EFECTO SCROLL INTERACTIVO DEL MAGUEY
    // ============================================================
 // ============================================================
    // (Nace el logo)
    // ============================================================
    (function initMagueyScrollEffect() {
        let isInHero = true;
        const heroHeight = heroSection.offsetHeight;

        // Configuración de animación de las pencas
        const pencaAnimations = [
            { x: -220, y: -150, rot: -60, delay: 0.0 },      // penca-1
            { x: -260, y: 0, rot: -80, delay: 0.02 },         // penca-2
            { x: -220, y: 150, rot: -90, delay: 0.04 },        // penca-3
            { x: 220, y: -150, rot: 60, delay: 0.0 },          // penca-4
            { x: 260, y: 0, rot: 80, delay: 0.02 },           // penca-5
            { x: 220, y: 150, rot: 90, delay: 0.04 },          // penca-6
            { x: -100, y: -220, rot: -40, delay: 0.06 },       // penca-7
            { x: 100, y: -220, rot: 40, delay: 0.06 }          // penca-8
        ];

        function updateMagueyAnimation() {
            const scrollY = window.scrollY;
            const heroBottom = heroSection.offsetTop + heroHeight;

            // Progreso del scroll dentro del hero (0 a 1)
            let progress = scrollY / (heroHeight * 0.8);
            progress = Math.max(0, Math.min(1, progress));

            // Ocultar indicador de scroll
            if (heroScrollIndicator) {
                heroScrollIndicator.style.opacity = Math.max(0, 1 - progress * 4);
            }

            // 1. LAS PENCAS SE ABREN DANDO PASO AL NACIMIENTO
            pencas.forEach(function(penca, index) {
                if (!penca) return;
                const anim = pencaAnimations[index];
                const adjustedProgress = Math.max(0, (progress - anim.delay) / (1 - anim.delay));
                const easeProgress = easeOutCubic(Math.min(1, adjustedProgress));

                const translateX = anim.x * easeProgress;
                const translateY = anim.y * easeProgress;
                const rotate = anim.rot * easeProgress;
                const opacity = Math.max(0, 1 - easeProgress * 1.5);
                const scale = Math.max(0.4, 1 - easeProgress * 0.4);

                penca.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`;
                penca.style.opacity = opacity;
            });

            // 2. EL CORAZÓN DEL MAGUEY SE ABRE Y SE DISUELVE
            if (corazon) {
                const zoomProgress = easeOutCubic(progress);
                const scale = 1 + zoomProgress * 0.5; // Ligero crecimiento antes de disolverse
                const opacity = Math.max(0, 1 - progress * 2.2); // Desaparece rápido para revelar el centro

                corazon.style.transform = `scale(${scale})`;
                corazon.style.opacity = opacity;
            }

            // 3. EL LOGO "NACE" Y EMERGE DEL CENTRO DEL MAGUEY
            if (logoEmerge) {
                // Empieza a nacer casi de inmediato al mover el scroll (al 2% del progreso)
                const logoProgress = Math.max(0, (progress - 0.02) / 0.7);
                
                // Efecto elástico (Back Out) para que dé la sensación de brotar / germinar
                const logoEase = easeOutBack(Math.min(1, logoProgress));
                
                const logoScale = logoEase * 1.1; // Crece hasta su tamaño final destacado
                const logoOpacity = Math.min(1, logoProgress * 3); // Se vuelve visible de inmediato

                // Nace centrado y se expande desde el núcleo
                logoEmerge.style.transform = `translate(-50%, -50%) scale(${logoScale})`;
                logoEmerge.style.opacity = logoOpacity;
            }

            isInHero = scrollY < heroBottom;
        }

        // Función Easing para suavizado
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        // Función Easing con rebote elástico suave para el nacimiento
        function easeOutBack(t) {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateMagueyAnimation();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateMagueyAnimation();
    })();

    // ============================================================
    // 4. MENÚ MÓVIL RESPONSIVE
    // ============================================================
    (function initMobileMenu() {
        if (!menuToggle || !headerNav) return;

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('is-active');
            headerNav.classList.toggle('is-open');
            document.body.style.overflow = headerNav.classList.contains('is-open') ? 'hidden' : '';
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = headerNav.querySelectorAll('.header-nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('is-active');
                headerNav.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (headerNav.classList.contains('is-open') &&
                !headerNav.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('is-active');
                headerNav.classList.remove('is-open');
                document.body.style.overflow = '';
            }
        });
    })();

    // ============================================================
    // 5. HEADER SCROLL BEHAVIOR
    // ============================================================
    (function initHeaderScroll() {
        let lastScrollY = 0;
        const scrollThreshold = 80;

        function updateHeader() {
            const scrollY = window.scrollY;

            if (scrollY > scrollThreshold) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }

            lastScrollY = scrollY;
        }

        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateHeader();
                    ticking = false;
                });
                ticking = true;
            }
        });

        updateHeader();
    })();

    // ============================================================
    // 6. SMOOTH SCROLL PARA NAVEGACIÓN INTERNA
    // ============================================================
    (function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    })();

    // ============================================================
    // 7. FORMULARIO DE CONTACTO - PREVENIR ENVÍO POR DEFECTO
    // ============================================================
    (function initContactForm() {
        const form = document.getElementById('contacto-form');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('contacto-nombre').value.trim();
            const email = document.getElementById('contacto-email').value.trim();
            const mensaje = document.getElementById('contacto-mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor completa todos los campos del formulario.');
                return;
            }

            // Aquí puedes integrar el backend para enviar el correo
            // Por ahora mostramos un mensaje de confirmación
            alert('¡Gracias ' + nombre + '! Tu mensaje ha sido recibido. Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    })();

    // ============================================================
    // 8. PARALLAX SUAVE EN SECCIONES
    // ============================================================
    (function initParallax() {
        const parallaxElements = document.querySelectorAll('.presentacion-image, .mision-icon, .vision-icon');

        const parallaxObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('parallax-active');
                }
            });
        }, { threshold: 0.2 });

        parallaxElements.forEach(function(el) {
            parallaxObserver.observe(el);
        });
    })();

    // ============================================================
    // 9. ANIMACIÓN DE ENTRADA ESCALONADA PARA CARDS
    // ============================================================
    (function initStaggeredAnimations() {
        const grids = [
            { selector: '.concurso-grid', child: '.concurso-card' },
            { selector: '.jueces-grid', child: '.juez-card' },
            { selector: '.patrocinadores-grid', child: '.patrocinador-card' }
        ];

        grids.forEach(function(grid) {
            const container = document.querySelector(grid.selector);
            if (!container) return;

            const items = container.querySelectorAll(grid.child);
            items.forEach(function(item, index) {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
            });

            const gridObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        items.forEach(function(item) {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                        gridObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            gridObserver.observe(container);
        });
    })();

    // ============================================================
    // 10. EFECTO DE RESALTADO EN BOTONES DE REGISTRO
    // ============================================================
    (function initButtonEffects() {
        const buttons = document.querySelectorAll('.registro-btn');
        buttons.forEach(function(btn) {
            btn.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(10px)';
            });
            btn.addEventListener('mouseup', function() {
                this.style.transform = '';
            });
            btn.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    })();

});
