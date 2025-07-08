// Portfolio Filtering
        document.addEventListener('DOMContentLoaded', function() {
            const filterBtns = document.querySelectorAll('.pt-filter-btn');
            const portfolioItems = document.querySelectorAll('.pt-portfolio-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    const filter = btn.dataset.filter;
                    
                    // Filter portfolio items
                    portfolioItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            

            // Initialize on load and resize
            setupFilterMenu();
            window.addEventListener('resize', setupFilterMenu);
        });