// Mobile Menu Toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            const menu = document.querySelector('.mobile-menu ul');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.querySelector('.mobile-menu');
            const menu = document.querySelector('.mobile-menu ul');
            
            if (!mobileMenu.contains(event.target) && menu.style.display === 'block') {
                menu.style.display = 'none';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.mobile-menu ul');
                    if (mobileMenu.style.display === 'block') {
                        mobileMenu.style.display = 'none';
                    }
                    
                    // Calculate the position to scroll to
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add active class to nav links based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.desktop-menu a, .mobile-menu a');
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - headerHeight - 50)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });